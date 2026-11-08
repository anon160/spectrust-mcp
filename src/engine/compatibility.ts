import {
  Product,
  CompatibilityReport,
  CompatibilityIssue,
  CpuSpecsSchema,
  GpuSpecsSchema,
  MotherboardSpecsSchema,
  CoolerSpecsSchema,
  CaseSpecsSchema,
  PsuSpecsSchema,
  RamSpecsSchema
} from "../types.js";
import { ProductRepository } from "../db/repository.js";

export async function evaluateBuildCompatibility(
  productIds: string[],
  repository: ProductRepository
): Promise<CompatibilityReport> {
  const issues: CompatibilityIssue[] = [];
  const selectedProducts: Product[] = [];

  const foundProducts = await repository.getByIds(productIds);
  const foundMap = new Map(foundProducts.map((p) => [p.id, p]));

  for (const id of productIds) {
    const prod = foundMap.get(id);
    if (!prod) {
      issues.push({
        severity: "WARNING",
        component_a_id: id,
        message: `Product ID '${id}' not found in verified database.`,
        remedy: "Verify product ID using search_products tool."
      });
    } else {
      selectedProducts.push(prod);
    }
  }

  // Group by category
  const cpus = selectedProducts.filter((p) => p.category === "cpu");
  const gpus = selectedProducts.filter((p) => p.category === "gpu");
  const mobos = selectedProducts.filter((p) => p.category === "motherboard");
  const coolers = selectedProducts.filter((p) => p.category === "cooler");
  const cases = selectedProducts.filter((p) => p.category === "case");
  const psus = selectedProducts.filter((p) => p.category === "psu");
  const rams = selectedProducts.filter((p) => p.category === "ram");

  // 1. Calculate Estimated Power Draw (TDP)
  let baseSystemTdp = 75; // Baseline for Motherboard, NVMe SSDs, fans, and RAM
  let cpuTdp = 0;
  let gpuTdp = 0;

  if (cpus.length > 0) {
    const cpuSpecs = cpus[0].specs as ReturnType<typeof CpuSpecsSchema.parse>;
    cpuTdp = cpuSpecs.tdp_watts;
  }

  if (gpus.length > 0) {
    for (const gpu of gpus) {
      const gpuSpecs = gpu.specs as ReturnType<typeof GpuSpecsSchema.parse>;
      gpuTdp += gpuSpecs.tdp_watts;
    }
  }

  const totalEstimatedTdp = baseSystemTdp + cpuTdp + gpuTdp;
  // Standard safety multiplier: 30% headroom for transient spikes (especially on high-end GPUs)
  const recommendedPsuWattage = Math.ceil((totalEstimatedTdp * 1.3) / 50) * 50;

  // 2. CPU <-> Motherboard Socket Check
  if (cpus.length > 0 && mobos.length > 0) {
    const cpu = cpus[0];
    const mobo = mobos[0];
    const cpuSpecs = cpu.specs as ReturnType<typeof CpuSpecsSchema.parse>;
    const moboSpecs = mobo.specs as ReturnType<typeof MotherboardSpecsSchema.parse>;

    if (cpuSpecs.socket !== moboSpecs.socket) {
      issues.push({
        severity: "CRITICAL_INCOMPATIBLE",
        component_a_id: cpu.id,
        component_b_id: mobo.id,
        message: `Socket mismatch: CPU '${cpu.model}' requires socket '${cpuSpecs.socket}', but motherboard '${mobo.model}' uses socket '${moboSpecs.socket}'.`,
        remedy: `Choose a motherboard with socket '${cpuSpecs.socket}' (e.g. B650 for AM5 or B760/Z790 for LGA1700).`
      });
    }
  }

  // 3. Motherboard Form Factor <-> Case Form Factor Check
  if (mobos.length > 0 && cases.length > 0) {
    const mobo = mobos[0];
    const chasis = cases[0];
    const moboSpecs = mobo.specs as ReturnType<typeof MotherboardSpecsSchema.parse>;
    const caseSpecs = chasis.specs as ReturnType<typeof CaseSpecsSchema.parse>;

    if (!caseSpecs.supported_motherboards.includes(moboSpecs.form_factor)) {
      issues.push({
        severity: "CRITICAL_INCOMPATIBLE",
        component_a_id: mobo.id,
        component_b_id: chasis.id,
        message: `Form factor mismatch: Case '${chasis.model}' does not support '${moboSpecs.form_factor}' motherboards (Supported: ${caseSpecs.supported_motherboards.join(", ")}).`,
        remedy: `Either select a ${caseSpecs.supported_motherboards.join(" or ")} motherboard, or choose an ATX-compatible case.`
      });
    }
  }

  // 4. GPU Length <-> Case Max Clearance Check
  if (gpus.length > 0 && cases.length > 0) {
    const chasis = cases[0];
    const caseSpecs = chasis.specs as ReturnType<typeof CaseSpecsSchema.parse>;

    for (const gpu of gpus) {
      const gpuSpecs = gpu.specs as ReturnType<typeof GpuSpecsSchema.parse>;
      if (gpuSpecs.length_mm > caseSpecs.max_gpu_length_mm) {
        issues.push({
          severity: "CRITICAL_INCOMPATIBLE",
          component_a_id: gpu.id,
          component_b_id: chasis.id,
          message: `Physical clearance collision: GPU '${gpu.model}' length is ${gpuSpecs.length_mm}mm, but case '${chasis.model}' allows a maximum of ${caseSpecs.max_gpu_length_mm}mm.`,
          remedy: `Select a more compact GPU (under ${caseSpecs.max_gpu_length_mm}mm) or a larger case.`
        });
      }
    }
  }

  // 5. CPU Cooler Height <-> Case Max Clearance Check
  if (coolers.length > 0 && cases.length > 0) {
    const cooler = coolers[0];
    const chasis = cases[0];
    const coolerSpecs = cooler.specs as ReturnType<typeof CoolerSpecsSchema.parse>;
    const caseSpecs = chasis.specs as ReturnType<typeof CaseSpecsSchema.parse>;

    if (coolerSpecs.type === "Air" && coolerSpecs.height_mm > caseSpecs.max_cooler_height_mm) {
      issues.push({
        severity: "CRITICAL_INCOMPATIBLE",
        component_a_id: cooler.id,
        component_b_id: chasis.id,
        message: `Cooler clearance collision: CPU cooler '${cooler.model}' height is ${coolerSpecs.height_mm}mm, but case '${chasis.model}' side panel allows max ${caseSpecs.max_cooler_height_mm}mm.`,
        remedy: `Choose a lower-profile air cooler under ${caseSpecs.max_cooler_height_mm}mm, or an AIO liquid cooler.`
      });
    }
  }

  // 6. CPU Cooler Socket Support Check
  if (coolers.length > 0 && cpus.length > 0) {
    const cooler = coolers[0];
    const cpu = cpus[0];
    const coolerSpecs = cooler.specs as ReturnType<typeof CoolerSpecsSchema.parse>;
    const cpuSpecs = cpu.specs as ReturnType<typeof CpuSpecsSchema.parse>;

    if (!coolerSpecs.supported_sockets.includes(cpuSpecs.socket)) {
      issues.push({
        severity: "CRITICAL_INCOMPATIBLE",
        component_a_id: cooler.id,
        component_b_id: cpu.id,
        message: `Mounting bracket incompatibility: Cooler '${cooler.model}' does not support socket '${cpuSpecs.socket}'.`,
        remedy: `Select a cooler with verified mounting brackets for ${cpuSpecs.socket}.`
      });
    }

    if (coolerSpecs.max_tdp_dissipation_watts < cpuSpecs.tdp_watts) {
      issues.push({
        severity: "WARNING",
        component_a_id: cooler.id,
        component_b_id: cpu.id,
        message: `Thermal throttling risk: Cooler '${cooler.model}' is rated for ${coolerSpecs.max_tdp_dissipation_watts}W, but CPU '${cpu.model}' has a rated TDP of ${cpuSpecs.tdp_watts}W.`,
        remedy: "Upgrade to a dual-tower air cooler or 240mm/360mm AIO liquid cooler for sustained workloads."
      });
    }
  }

  // 7. RAM Type <-> Motherboard RAM Type Check
  if (rams.length > 0 && mobos.length > 0) {
    const ram = rams[0];
    const mobo = mobos[0];
    const ramSpecs = ram.specs as ReturnType<typeof RamSpecsSchema.parse>;
    const moboSpecs = mobo.specs as ReturnType<typeof MotherboardSpecsSchema.parse>;

    if (ramSpecs.type !== moboSpecs.ram_type) {
      issues.push({
        severity: "CRITICAL_INCOMPATIBLE",
        component_a_id: ram.id,
        component_b_id: mobo.id,
        message: `Memory generation mismatch: RAM is '${ramSpecs.type}', but motherboard requires '${moboSpecs.ram_type}'.`,
        remedy: `Choose ${moboSpecs.ram_type} memory modules.`
      });
    }
  }

  // 8. PSU Wattage & Form Factor Check
  if (psus.length > 0) {
    const psu = psus[0];
    const psuSpecs = psu.specs as ReturnType<typeof PsuSpecsSchema.parse>;

    if (psuSpecs.wattage < totalEstimatedTdp) {
      issues.push({
        severity: "CRITICAL_INCOMPATIBLE",
        component_a_id: psu.id,
        message: `Severe power deficit: PSU is rated for ${psuSpecs.wattage}W, but system estimated draw is ${totalEstimatedTdp}W. The PC will trip over-current protection (OCP) and crash.`,
        remedy: `Upgrade to at least a ${recommendedPsuWattage}W power supply.`
      });
    } else if (psuSpecs.wattage < recommendedPsuWattage) {
      issues.push({
        severity: "WARNING",
        component_a_id: psu.id,
        message: `Limited power headroom: PSU is ${psuSpecs.wattage}W, but recommended capacity with transient spike buffer is ${recommendedPsuWattage}W.`,
        remedy: `A ${recommendedPsuWattage}W unit is recommended for long-term component longevity.`
      });
    }

    if (cases.length > 0) {
      const chasis = cases[0];
      const caseSpecs = chasis.specs as ReturnType<typeof CaseSpecsSchema.parse>;
      if (caseSpecs.form_factor === "Mini-ITX" && psuSpecs.form_factor === "ATX" && caseSpecs.max_psu_length_mm < 140) {
        issues.push({
          severity: "CRITICAL_INCOMPATIBLE",
          component_a_id: psu.id,
          component_b_id: chasis.id,
          message: `PSU size collision: Case '${chasis.model}' strictly requires an SFX / SFX-L power supply, but '${psu.model}' is an ATX form-factor PSU.`,
          remedy: "Switch to a dedicated SFX power supply (such as Corsair SF750)."
        });
      }
    }
  }

  const hasCritical = issues.some((i) => i.severity === "CRITICAL_INCOMPATIBLE");

  return {
    is_compatible: !hasCritical,
    total_estimated_tdp_watts: totalEstimatedTdp,
    recommended_psu_wattage: recommendedPsuWattage,
    issues,
    products_analyzed: selectedProducts.map((p) => ({
      id: p.id,
      model: p.model,
      category: p.category
    }))
  };
}
