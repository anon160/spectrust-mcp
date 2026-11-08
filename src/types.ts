import { z } from "zod";

export const ComponentCategorySchema = z.enum([
  "cpu",
  "gpu",
  "motherboard",
  "ram",
  "storage",
  "psu",
  "case",
  "cooler"
]);

export type ComponentCategory = z.infer<typeof ComponentCategorySchema>;

export const MerchantOfferSchema = z.object({
  merchant: z.enum(["amazon", "newegg", "bestbuy", "bhphoto"]),
  price_usd: z.number().positive(),
  in_stock: z.boolean(),
  direct_url: z.string().url(),
  shipping_days: z.number().int().nonnegative().optional()
});

export type MerchantOffer = z.infer<typeof MerchantOfferSchema>;

export const TrustMetricsSchema = z.object({
  overall_trust_score: z.number().min(1).max(100),
  spec_accuracy_score: z.number().min(1).max(100),
  fake_review_resistance: z.number().min(1).max(100), // 100 = authentic reviews, 1 = heavy review-farm activity
  rma_reliability_score: z.number().min(1).max(100),  // 100 = lowest defect/return rates
  independent_lab_tested: z.boolean(),
  known_issues_flagged: z.array(z.string()).default([])
});

export type TrustMetrics = z.infer<typeof TrustMetricsSchema>;

export const BaseProductSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  category: ComponentCategorySchema,
  release_year: z.number().int(),
  trust: TrustMetricsSchema,
  offers: z.array(MerchantOfferSchema)
});

// Category-specific parametric specifications
export const CpuSpecsSchema = z.object({
  socket: z.string(), // "AM5", "LGA1700", "AM4"
  cores: z.number().int(),
  threads: z.number().int(),
  base_clock_ghz: z.number(),
  boost_clock_ghz: z.number(),
  tdp_watts: z.number().int(),
  pcie_version: z.string(),
  integrated_gpu: z.boolean(),
  cooler_included: z.boolean()
});

export const GpuSpecsSchema = z.object({
  chipset: z.string(), // "RTX 4070 SUPER", "RX 7800 XT"
  vram_gb: z.number(),
  length_mm: z.number(), // Crucial for case clearance!
  slot_thickness: z.number(), // e.g. 2.5 slots
  tdp_watts: z.number().int(),
  recommended_psu_watts: z.number().int(),
  power_connectors: z.string() // "1x 16-pin (12VHPWR)", "2x 8-pin"
});

export const MotherboardSpecsSchema = z.object({
  socket: z.string(),
  form_factor: z.enum(["Mini-ITX", "Micro-ATX", "ATX", "E-ATX"]),
  chipset: z.string(), // "B650", "Z790", "X670E"
  ram_type: z.enum(["DDR4", "DDR5"]),
  ram_slots: z.number().int(),
  max_ram_gb: z.number().int(),
  pcie_5_support: z.boolean(),
  m2_slots: z.number().int(),
  wifi_included: z.boolean()
});

export const RamSpecsSchema = z.object({
  type: z.enum(["DDR4", "DDR5"]),
  capacity_gb: z.number().int(),
  speed_mhz: z.number().int(),
  cas_latency: z.number().int(),
  modules: z.string(), // "2x16GB", "2x32GB"
  rgb: z.boolean(),
  profile_support: z.array(z.string()) // ["EXPO", "XMP 3.0"]
});

export const StorageSpecsSchema = z.object({
  form_factor: z.enum(["M.2 2280", "2.5-inch SATA"]),
  capacity_gb: z.number().int(),
  interface: z.enum(["PCIe 4.0 x4", "PCIe 5.0 x4", "PCIe 3.0 x4", "SATA III"]),
  read_speed_mbps: z.number().int(),
  write_speed_mbps: z.number().int(),
  tbw_endurance: z.number().int(), // Terabytes Written
  has_dram_cache: z.boolean()
});

export const PsuSpecsSchema = z.object({
  wattage: z.number().int(),
  efficiency_rating: z.enum(["80+ Bronze", "80+ Gold", "80+ Platinum", "80+ Titanium"]),
  form_factor: z.enum(["ATX", "SFX", "SFX-L"]),
  modularity: z.enum(["Full", "Semi", "Non"]),
  pcie_5_ready: z.boolean(), // Native 12V-2x6 / 12VHPWR cable
  length_mm: z.number().int()
});

export const CaseSpecsSchema = z.object({
  form_factor: z.enum(["Mini-ITX", "Micro-ATX", "Mid Tower", "Full Tower"]),
  supported_motherboards: z.array(z.enum(["Mini-ITX", "Micro-ATX", "ATX", "E-ATX"])),
  max_gpu_length_mm: z.number(),
  max_cooler_height_mm: z.number(),
  max_psu_length_mm: z.number(),
  included_fans: z.number().int()
});

export const CoolerSpecsSchema = z.object({
  type: z.enum(["Air", "AIO 240", "AIO 280", "AIO 360"]),
  height_mm: z.number(), // For air coolers
  radiator_size_mm: z.number().optional(), // For AIO
  supported_sockets: z.array(z.string()),
  max_tdp_dissipation_watts: z.number().int()
});

export const ProductSchema = BaseProductSchema.extend({
  specs: z.union([
    CpuSpecsSchema,
    GpuSpecsSchema,
    MotherboardSpecsSchema,
    RamSpecsSchema,
    StorageSpecsSchema,
    PsuSpecsSchema,
    CaseSpecsSchema,
    CoolerSpecsSchema
  ])
});

export type Product = z.infer<typeof ProductSchema>;

export interface CompatibilityIssue {
  severity: "CRITICAL_INCOMPATIBLE" | "WARNING" | "NOTE";
  component_a_id: string;
  component_b_id?: string;
  message: string;
  remedy: string;
}

export interface CompatibilityReport {
  is_compatible: boolean;
  total_estimated_tdp_watts: number;
  recommended_psu_wattage: number;
  issues: CompatibilityIssue[];
  products_analyzed: {
    id: string;
    model: string;
    category: ComponentCategory;
  }[];
}
