import { Product } from "../types.js";

export const CATALOG: Product[] = [
  // ==========================================
  // CPUS (PROCESSORS)
  // ==========================================
  {
    id: "cpu-amd-7800x3d",
    brand: "AMD",
    model: "Ryzen 7 7800X3D",
    category: "cpu",
    release_year: 2023,
    trust: {
      overall_trust_score: 97,
      spec_accuracy_score: 98,
      fake_review_resistance: 95,
      rma_reliability_score: 98,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      socket: "AM5",
      cores: 8,
      threads: 16,
      base_clock_ghz: 4.2,
      boost_clock_ghz: 5.0,
      tdp_watts: 120,
      pcie_version: "PCIe 5.0",
      integrated_gpu: true,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 449.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BTZB7F88" },
      { merchant: "newegg", price_usd: 459.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819113793" },
      { merchant: "bestbuy", price_usd: 449.99, in_stock: false, direct_url: "https://www.bestbuy.com/site/amd-ryzen-7-7800x3d/6537004.p" }
    ]
  },
  {
    id: "cpu-amd-9800x3d",
    brand: "AMD",
    model: "Ryzen 7 9800X3D",
    category: "cpu",
    release_year: 2024,
    trust: {
      overall_trust_score: 98,
      spec_accuracy_score: 99,
      fake_review_resistance: 96,
      rma_reliability_score: 98,
      independent_lab_tested: true,
      known_issues_flagged: ["High launch demand; verify MSRP pricing against scalper listings."]
    },
    specs: {
      socket: "AM5",
      cores: 8,
      threads: 16,
      base_clock_ghz: 4.7,
      boost_clock_ghz: 5.2,
      tdp_watts: 120,
      pcie_version: "PCIe 5.0",
      integrated_gpu: true,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 479.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0DKKCW9K7" },
      { merchant: "newegg", price_usd: 479.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819113864" }
    ]
  },
  {
    id: "cpu-amd-7600x",
    brand: "AMD",
    model: "Ryzen 5 7600X",
    category: "cpu",
    release_year: 2022,
    trust: {
      overall_trust_score: 94,
      spec_accuracy_score: 96,
      fake_review_resistance: 92,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: ["Aggressive boost algorithm targets 95°C under sustained AVX load by design."]
    },
    specs: {
      socket: "AM5",
      cores: 6,
      threads: 12,
      base_clock_ghz: 4.7,
      boost_clock_ghz: 5.3,
      tdp_watts: 105,
      pcie_version: "PCIe 5.0",
      integrated_gpu: true,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 199.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BBJDS62N" },
      { merchant: "newegg", price_usd: 204.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819113770" }
    ]
  },
  {
    id: "cpu-amd-7950x3d",
    brand: "AMD",
    model: "Ryzen 9 7950X3D",
    category: "cpu",
    release_year: 2023,
    trust: {
      overall_trust_score: 92,
      spec_accuracy_score: 94,
      fake_review_resistance: 91,
      rma_reliability_score: 94,
      independent_lab_tested: true,
      known_issues_flagged: ["Asymmetric CCD architecture requires AMD 3D V-Cache Optimizer driver and Windows Game Bar to ensure games park on cache CCD."]
    },
    specs: {
      socket: "AM5",
      cores: 16,
      threads: 32,
      base_clock_ghz: 4.2,
      boost_clock_ghz: 5.7,
      tdp_watts: 120,
      pcie_version: "PCIe 5.0",
      integrated_gpu: true,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 599.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BTRH9MNS" },
      { merchant: "newegg", price_usd: 609.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819113791" }
    ]
  },
  {
    id: "cpu-amd-5700x3d",
    brand: "AMD",
    model: "Ryzen 7 5700X3D",
    category: "cpu",
    release_year: 2024,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 95,
      rma_reliability_score: 97,
      independent_lab_tested: true,
      known_issues_flagged: ["AM4 legacy socket. Requires DDR4 RAM and cannot upgrade to DDR5 or AM5 without motherboard replacement."]
    },
    specs: {
      socket: "AM4",
      cores: 8,
      threads: 16,
      base_clock_ghz: 3.0,
      boost_clock_ghz: 4.1,
      tdp_watts: 105,
      pcie_version: "PCIe 4.0",
      integrated_gpu: false,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 209.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CQ4H4H7X" },
      { merchant: "newegg", price_usd: 209.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819113812" }
    ]
  },
  {
    id: "cpu-intel-14700k",
    brand: "Intel",
    model: "Core i7-14700K",
    category: "cpu",
    release_year: 2023,
    trust: {
      overall_trust_score: 79,
      spec_accuracy_score: 82,
      fake_review_resistance: 88,
      rma_reliability_score: 74,
      independent_lab_tested: true,
      known_issues_flagged: [
        "Elevated voltage degradation issue reported on 13th/14th Gen Intel CPUs. Requires motherboard BIOS update with 0x129/0x12B microcode.",
        "High power consumption under unlimited PL2 (can draw upwards of 280W under stress)."
      ]
    },
    specs: {
      socket: "LGA1700",
      cores: 20,
      threads: 28,
      base_clock_ghz: 3.4,
      boost_clock_ghz: 5.6,
      tdp_watts: 253,
      pcie_version: "PCIe 5.0",
      integrated_gpu: true,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 359.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CGJ41K6M" },
      { merchant: "newegg", price_usd: 364.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819118464" }
    ]
  },
  {
    id: "cpu-intel-13600k",
    brand: "Intel",
    model: "Core i5-13600K",
    category: "cpu",
    release_year: 2022,
    trust: {
      overall_trust_score: 93,
      spec_accuracy_score: 96,
      fake_review_resistance: 94,
      rma_reliability_score: 91,
      independent_lab_tested: true,
      known_issues_flagged: ["Update motherboard BIOS to latest microcode to ensure stability compliance."]
    },
    specs: {
      socket: "LGA1700",
      cores: 14,
      threads: 20,
      base_clock_ghz: 3.5,
      boost_clock_ghz: 5.1,
      tdp_watts: 181,
      pcie_version: "PCIe 5.0",
      integrated_gpu: true,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 259.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BCDR9M33" },
      { merchant: "newegg", price_usd: 264.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16819118416" }
    ]
  },
  {
    id: "cpu-intel-12600kf",
    brand: "Intel",
    model: "Core i5-12600KF",
    category: "cpu",
    release_year: 2021,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 97,
      fake_review_resistance: 95,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: ["'KF' sku lacks integrated GPU. Dedicated graphics card required to boot."]
    },
    specs: {
      socket: "LGA1700",
      cores: 10,
      threads: 16,
      base_clock_ghz: 3.7,
      boost_clock_ghz: 4.9,
      tdp_watts: 150,
      pcie_version: "PCIe 5.0",
      integrated_gpu: false,
      cooler_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 154.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B09FXFJW2F" }
    ]
  },

  // ==========================================
  // GPUS (GRAPHICS CARDS)
  // ==========================================
  {
    id: "gpu-nvidia-4090-fe",
    brand: "NVIDIA",
    model: "GeForce RTX 4090 Founders Edition 24GB",
    category: "gpu",
    release_year: 2022,
    trust: {
      overall_trust_score: 94,
      spec_accuracy_score: 98,
      fake_review_resistance: 95,
      rma_reliability_score: 91,
      independent_lab_tested: true,
      known_issues_flagged: ["12VHPWR connector must be fully clicked into socket; improper seating can cause terminal melting under 450W sustained loads."]
    },
    specs: {
      chipset: "RTX 4090",
      vram_gb: 24,
      length_mm: 304,
      slot_thickness: 3.0,
      tdp_watts: 450,
      recommended_psu_watts: 1000,
      power_connectors: "1x 16-pin (12VHPWR)"
    },
    offers: [
      { merchant: "bestbuy", price_usd: 1599.99, in_stock: false, direct_url: "https://www.bestbuy.com/site/nvidia-geforce-rtx-4090-24gb/6521430.p" },
      { merchant: "amazon", price_usd: 1799.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BHC69CFF" }
    ]
  },
  {
    id: "gpu-msi-4080s-slim",
    brand: "MSI",
    model: "GeForce RTX 4080 SUPER 16G GAMING X SLIM",
    category: "gpu",
    release_year: 2024,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 97,
      fake_review_resistance: 94,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      chipset: "RTX 4080 SUPER",
      vram_gb: 16,
      length_mm: 322,
      slot_thickness: 3.0,
      tdp_watts: 320,
      recommended_psu_watts: 850,
      power_connectors: "1x 16-pin (12VHPWR)"
    },
    offers: [
      { merchant: "amazon", price_usd: 999.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CSG6K1S7" },
      { merchant: "newegg", price_usd: 1019.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16814137870" }
    ]
  },
  {
    id: "gpu-asus-tuf-4070ts",
    brand: "ASUS",
    model: "TUF Gaming GeForce RTX 4070 Ti SUPER 16GB",
    category: "gpu",
    release_year: 2024,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 97,
      fake_review_resistance: 94,
      rma_reliability_score: 94,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      chipset: "RTX 4070 Ti SUPER",
      vram_gb: 16,
      length_mm: 305,
      slot_thickness: 3.25,
      tdp_watts: 285,
      recommended_psu_watts: 750,
      power_connectors: "1x 16-pin (12VHPWR)"
    },
    offers: [
      { merchant: "amazon", price_usd: 799.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CSK759F7" },
      { merchant: "newegg", price_usd: 819.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16814126690" }
    ]
  },
  {
    id: "gpu-gigabyte-4070s-windforce",
    brand: "Gigabyte",
    model: "GeForce RTX 4070 SUPER WINDFORCE OC 12GB",
    category: "gpu",
    release_year: 2024,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 97,
      fake_review_resistance: 94,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      chipset: "RTX 4070 SUPER",
      vram_gb: 12,
      length_mm: 261,
      slot_thickness: 2.5,
      tdp_watts: 220,
      recommended_psu_watts: 650,
      power_connectors: "1x 16-pin (12VHPWR)"
    },
    offers: [
      { merchant: "amazon", price_usd: 599.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CSTZ1R64" },
      { merchant: "newegg", price_usd: 599.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16814932684" }
    ]
  },
  {
    id: "gpu-sapphire-pulse-7800xt",
    brand: "Sapphire",
    model: "PULSE AMD Radeon RX 7800 XT 16GB",
    category: "gpu",
    release_year: 2023,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 97,
      fake_review_resistance: 96,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      chipset: "RX 7800 XT",
      vram_gb: 16,
      length_mm: 280,
      slot_thickness: 2.5,
      tdp_watts: 263,
      recommended_psu_watts: 700,
      power_connectors: "2x 8-pin"
    },
    offers: [
      { merchant: "amazon", price_usd: 489.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CGHQ325Z" },
      { merchant: "newegg", price_usd: 499.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16814202434" }
    ]
  },
  {
    id: "gpu-powercolor-7900gre",
    brand: "PowerColor",
    model: "Hellhound AMD Radeon RX 7900 GRE 16GB",
    category: "gpu",
    release_year: 2024,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 96,
      fake_review_resistance: 95,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      chipset: "RX 7900 GRE",
      vram_gb: 16,
      length_mm: 322,
      slot_thickness: 2.5,
      tdp_watts: 260,
      recommended_psu_watts: 750,
      power_connectors: "2x 8-pin"
    },
    offers: [
      { merchant: "amazon", price_usd: 539.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CSK759F8" }
    ]
  },
  {
    id: "gpu-zotac-4060ti-twin",
    brand: "ZOTAC",
    model: "Gaming GeForce RTX 4060 Ti 8GB Twin Edge",
    category: "gpu",
    release_year: 2023,
    trust: {
      overall_trust_score: 87,
      spec_accuracy_score: 94,
      fake_review_resistance: 89,
      rma_reliability_score: 91,
      independent_lab_tested: true,
      known_issues_flagged: ["8GB VRAM limit can cause stutter in high-res raytracing texture packs."]
    },
    specs: {
      chipset: "RTX 4060 Ti",
      vram_gb: 8,
      length_mm: 225.5,
      slot_thickness: 2.2,
      tdp_watts: 160,
      recommended_psu_watts: 500,
      power_connectors: "1x 8-pin"
    },
    offers: [
      { merchant: "amazon", price_usd: 379.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0C49F3K1T" }
    ]
  },
  {
    id: "gpu-asus-dual-4060",
    brand: "ASUS",
    model: "Dual GeForce RTX 4060 V2 OC 8GB",
    category: "gpu",
    release_year: 2023,
    trust: {
      overall_trust_score: 92,
      spec_accuracy_score: 95,
      fake_review_resistance: 92,
      rma_reliability_score: 94,
      independent_lab_tested: true,
      known_issues_flagged: ["PCIe 4.0 x8 bus width. Slight performance drop when used on PCIe 3.0 motherboards."]
    },
    specs: {
      chipset: "RTX 4060",
      vram_gb: 8,
      length_mm: 227,
      slot_thickness: 2.5,
      tdp_watts: 115,
      recommended_psu_watts: 500,
      power_connectors: "1x 8-pin"
    },
    offers: [
      { merchant: "amazon", price_usd: 299.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0C774VN89" }
    ]
  },

  // ==========================================
  // MOTHERBOARDS
  // ==========================================
  {
    id: "mobo-msi-b650-tomahawk",
    brand: "MSI",
    model: "MAG B650 TOMAHAWK WIFI",
    category: "motherboard",
    release_year: 2022,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 96,
      fake_review_resistance: 94,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: ["Initial cold boots can exhibit 60-90s memory training on early AM5 BIOS revisions."]
    },
    specs: {
      socket: "AM5",
      form_factor: "ATX",
      chipset: "B650",
      ram_type: "DDR5",
      ram_slots: 4,
      max_ram_gb: 192,
      pcie_5_support: false,
      m2_slots: 3,
      wifi_included: true
    },
    offers: [
      { merchant: "amazon", price_usd: 199.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BHCCP83V" },
      { merchant: "newegg", price_usd: 199.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16813144557" }
    ]
  },
  {
    id: "mobo-gigabyte-b650i-aorus",
    brand: "Gigabyte",
    model: "B650I AORUS ULTRA Mini-ITX",
    category: "motherboard",
    release_year: 2023,
    trust: {
      overall_trust_score: 91,
      spec_accuracy_score: 93,
      fake_review_resistance: 90,
      rma_reliability_score: 90,
      independent_lab_tested: true,
      known_issues_flagged: ["Stacked M.2 heatsink can interfere with extra-wide low-profile CPU coolers."]
    },
    specs: {
      socket: "AM5",
      form_factor: "Mini-ITX",
      chipset: "B650",
      ram_type: "DDR5",
      ram_slots: 2,
      max_ram_gb: 96,
      pcie_5_support: true,
      m2_slots: 3,
      wifi_included: true
    },
    offers: [
      { merchant: "amazon", price_usd: 249.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BV8XGKBV" }
    ]
  },
  {
    id: "mobo-asrock-b650m-prors",
    brand: "ASRock",
    model: "B650M Pro RS WiFi Micro-ATX",
    category: "motherboard",
    release_year: 2023,
    trust: {
      overall_trust_score: 94,
      spec_accuracy_score: 96,
      fake_review_resistance: 93,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: ["Strong VRM design verified by Hardware Unboxed testing at under $150."]
    },
    specs: {
      socket: "AM5",
      form_factor: "Micro-ATX",
      chipset: "B650",
      ram_type: "DDR5",
      ram_slots: 4,
      max_ram_gb: 192,
      pcie_5_support: true,
      m2_slots: 3,
      wifi_included: true
    },
    offers: [
      { merchant: "newegg", price_usd: 149.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16813162130" }
    ]
  },
  {
    id: "mobo-asus-z790-e",
    brand: "ASUS",
    model: "ROG STRIX Z790-E GAMING WIFI II",
    category: "motherboard",
    release_year: 2023,
    trust: {
      overall_trust_score: 89,
      spec_accuracy_score: 92,
      fake_review_resistance: 87,
      rma_reliability_score: 88,
      independent_lab_tested: true,
      known_issues_flagged: ["Ensure Intel Baseline / Default profile is enabled in UEFI to prevent microcode degradation."]
    },
    specs: {
      socket: "LGA1700",
      form_factor: "ATX",
      chipset: "Z790",
      ram_type: "DDR5",
      ram_slots: 4,
      max_ram_gb: 192,
      pcie_5_support: true,
      m2_slots: 5,
      wifi_included: true
    },
    offers: [
      { merchant: "amazon", price_usd: 429.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CHMVY3V2" }
    ]
  },
  {
    id: "mobo-msi-b760-tomahawk",
    brand: "MSI",
    model: "MAG B760 TOMAHAWK WIFI",
    category: "motherboard",
    release_year: 2023,
    trust: {
      overall_trust_score: 93,
      spec_accuracy_score: 95,
      fake_review_resistance: 92,
      rma_reliability_score: 94,
      independent_lab_tested: true,
      known_issues_flagged: ["Does not support manual CPU core multiplier overclocking (B-series limitation)."]
    },
    specs: {
      socket: "LGA1700",
      form_factor: "ATX",
      chipset: "B760",
      ram_type: "DDR5",
      ram_slots: 4,
      max_ram_gb: 192,
      pcie_5_support: true,
      m2_slots: 3,
      wifi_included: true
    },
    offers: [
      { merchant: "amazon", price_usd: 179.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BNWD836Y" }
    ]
  },
  {
    id: "mobo-msi-b550-a-pro",
    brand: "MSI",
    model: "B550-A PRO",
    category: "motherboard",
    release_year: 2020,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: ["AM4 legacy socket. Strictly requires DDR4 memory."]
    },
    specs: {
      socket: "AM4",
      form_factor: "ATX",
      chipset: "B550",
      ram_type: "DDR4",
      ram_slots: 4,
      max_ram_gb: 128,
      pcie_5_support: false,
      m2_slots: 2,
      wifi_included: false
    },
    offers: [
      { merchant: "amazon", price_usd: 109.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B089CZSQB4" }
    ]
  },

  // ==========================================
  // COOLERS
  // ==========================================
  {
    id: "cooler-thermalright-pa120se",
    brand: "Thermalright",
    model: "Peerless Assassin 120 SE",
    category: "cooler",
    release_year: 2022,
    trust: {
      overall_trust_score: 98,
      spec_accuracy_score: 99,
      fake_review_resistance: 97,
      rma_reliability_score: 98,
      independent_lab_tested: true,
      known_issues_flagged: ["Gamers Nexus Best Air Cooler award: rivals $100 heatsinks at $35 MSRP."]
    },
    specs: {
      type: "Air",
      height_mm: 155,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1200"],
      max_tdp_dissipation_watts: 245
    },
    offers: [
      { merchant: "amazon", price_usd: 34.90, in_stock: true, direct_url: "https://www.amazon.com/dp/B09LGY38L4" }
    ]
  },
  {
    id: "cooler-thermalright-phantom-spirit",
    brand: "Thermalright",
    model: "Phantom Spirit 120 SE",
    category: "cooler",
    release_year: 2023,
    trust: {
      overall_trust_score: 99,
      spec_accuracy_score: 99,
      fake_review_resistance: 98,
      rma_reliability_score: 99,
      independent_lab_tested: true,
      known_issues_flagged: ["Upgraded 7-heatpipe successor to Peerless Assassin."]
    },
    specs: {
      type: "Air",
      height_mm: 154,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1851"],
      max_tdp_dissipation_watts: 260
    },
    offers: [
      { merchant: "amazon", price_usd: 35.90, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BNDTJVPL" }
    ]
  },
  {
    id: "cooler-noctua-nh-d15",
    brand: "Noctua",
    model: "NH-D15 chromax.black",
    category: "cooler",
    release_year: 2019,
    trust: {
      overall_trust_score: 97,
      spec_accuracy_score: 99,
      fake_review_resistance: 98,
      rma_reliability_score: 99,
      independent_lab_tested: true,
      known_issues_flagged: ["Large 165mm height requires wide PC cases. Front 140mm fan may need upward adjustment for tall RGB RAM."]
    },
    specs: {
      type: "Air",
      height_mm: 165,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1851"],
      max_tdp_dissipation_watts: 250
    },
    offers: [
      { merchant: "amazon", price_usd: 119.95, in_stock: true, direct_url: "https://www.amazon.com/dp/B07Y87YHRH" }
    ]
  },
  {
    id: "cooler-noctua-nh-l9a",
    brand: "Noctua",
    model: "NH-L9a-AM5 chromax.black",
    category: "cooler",
    release_year: 2023,
    trust: {
      overall_trust_score: 97,
      spec_accuracy_score: 99,
      fake_review_resistance: 98,
      rma_reliability_score: 99,
      independent_lab_tested: true,
      known_issues_flagged: ["Ultra low profile (37mm). Rated strictly for 65W TDP CPUs (e.g. Ryzen 7600/7700 or Eco Mode)."]
    },
    specs: {
      type: "Air",
      height_mm: 37,
      supported_sockets: ["AM5"],
      max_tdp_dissipation_watts: 65
    },
    offers: [
      { merchant: "amazon", price_usd: 54.95, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BTP9CMMZ" }
    ]
  },
  {
    id: "cooler-arctic-liquid-freezer-360",
    brand: "ARCTIC",
    model: "Liquid Freezer III 360 AIO",
    category: "cooler",
    release_year: 2024,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: ["Radiator is extra thick (38mm vs standard 27mm). Ensure case ceiling has at least 65mm clearance from motherboard VRM heatsinks."]
    },
    specs: {
      type: "AIO 360",
      height_mm: 53,
      radiator_size_mm: 360,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1851"],
      max_tdp_dissipation_watts: 320
    },
    offers: [
      { merchant: "amazon", price_usd: 104.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B09VH1DKV3" }
    ]
  },
  {
    id: "cooler-arctic-liquid-freezer-240",
    brand: "ARCTIC",
    model: "Liquid Freezer III 240 AIO",
    category: "cooler",
    release_year: 2024,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      type: "AIO 240",
      height_mm: 53,
      radiator_size_mm: 240,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1851"],
      max_tdp_dissipation_watts: 270
    },
    offers: [
      { merchant: "amazon", price_usd: 84.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B09VH3798R" }
    ]
  },

  // ==========================================
  // CASES
  // ==========================================
  {
    id: "case-fractal-north",
    brand: "Fractal Design",
    model: "North ATX Charcoal Black (Mesh/Glass)",
    category: "case",
    release_year: 2022,
    trust: {
      overall_trust_score: 97,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 98,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      form_factor: "Mid Tower",
      supported_motherboards: ["Mini-ITX", "Micro-ATX", "ATX"],
      max_gpu_length_mm: 355,
      max_cooler_height_mm: 170,
      max_psu_length_mm: 255,
      included_fans: 2
    },
    offers: [
      { merchant: "amazon", price_usd: 139.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B09V8687K6" },
      { merchant: "newegg", price_usd: 139.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16811352204" }
    ]
  },
  {
    id: "case-fractal-terra",
    brand: "Fractal Design",
    model: "Terra Mini-ITX Silver",
    category: "case",
    release_year: 2023,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 96,
      fake_review_resistance: 95,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: ["Only supports Mini-ITX motherboards and SFX/SFX-L power supplies. Air cooler height is tightly coupled with GPU width."]
    },
    specs: {
      form_factor: "Mini-ITX",
      supported_motherboards: ["Mini-ITX"],
      max_gpu_length_mm: 322,
      max_cooler_height_mm: 77,
      max_psu_length_mm: 130,
      included_fans: 0
    },
    offers: [
      { merchant: "amazon", price_usd: 179.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BYZMT9V4" }
    ]
  },
  {
    id: "case-lianli-o11-evo",
    brand: "Lian Li",
    model: "O11 Dynamic EVO Black",
    category: "case",
    release_year: 2022,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 97,
      fake_review_resistance: 95,
      rma_reliability_score: 97,
      independent_lab_tested: true,
      known_issues_flagged: ["Does not include pre-installed fans; requires separate purchase."]
    },
    specs: {
      form_factor: "Mid Tower",
      supported_motherboards: ["Mini-ITX", "Micro-ATX", "ATX", "E-ATX"],
      max_gpu_length_mm: 422,
      max_cooler_height_mm: 167,
      max_psu_length_mm: 220,
      included_fans: 0
    },
    offers: [
      { merchant: "amazon", price_usd: 149.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B09QHLY81G" }
    ]
  },
  {
    id: "case-corsair-4000d",
    brand: "Corsair",
    model: "4000D Airflow Black",
    category: "case",
    release_year: 2020,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 95,
      rma_reliability_score: 97,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      form_factor: "Mid Tower",
      supported_motherboards: ["Mini-ITX", "Micro-ATX", "ATX"],
      max_gpu_length_mm: 360,
      max_cooler_height_mm: 170,
      max_psu_length_mm: 220,
      included_fans: 2
    },
    offers: [
      { merchant: "amazon", price_usd: 89.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B08C7BGV3D" }
    ]
  },
  {
    id: "case-nzxt-h5-flow",
    brand: "NZXT",
    model: "H5 Flow (2024) All-Black",
    category: "case",
    release_year: 2024,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 97,
      fake_review_resistance: 94,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      form_factor: "Mid Tower",
      supported_motherboards: ["Mini-ITX", "Micro-ATX", "ATX"],
      max_gpu_length_mm: 365,
      max_cooler_height_mm: 165,
      max_psu_length_mm: 200,
      included_fans: 2
    },
    offers: [
      { merchant: "amazon", price_usd: 89.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0DCG6N53B" }
    ]
  },
  {
    id: "case-coolermaster-nr200p",
    brand: "Cooler Master",
    model: "MasterBox NR200P V2 Mini-ITX",
    category: "case",
    release_year: 2024,
    trust: {
      overall_trust_score: 94,
      spec_accuracy_score: 96,
      fake_review_resistance: 93,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: ["Vertical GPU mount only. Requires SFX/SFX-L power supply."]
    },
    specs: {
      form_factor: "Mini-ITX",
      supported_motherboards: ["Mini-ITX"],
      max_gpu_length_mm: 356,
      max_cooler_height_mm: 67,
      max_psu_length_mm: 130,
      included_fans: 2
    },
    offers: [
      { merchant: "amazon", price_usd: 114.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0CRVTKB5J" }
    ]
  },

  // ==========================================
  // POWER SUPPLIES (PSUS)
  // ==========================================
  {
    id: "psu-corsair-rm850x",
    brand: "Corsair",
    model: "RM850x (2021) 850W 80+ Gold",
    category: "psu",
    release_year: 2021,
    trust: {
      overall_trust_score: 97,
      spec_accuracy_score: 99,
      fake_review_resistance: 98,
      rma_reliability_score: 98,
      independent_lab_tested: true,
      known_issues_flagged: ["Cultists Tier A Gold standard."]
    },
    specs: {
      wattage: 850,
      efficiency_rating: "80+ Gold",
      form_factor: "ATX",
      modularity: "Full",
      pcie_5_ready: false,
      length_mm: 160
    },
    offers: [
      { merchant: "amazon", price_usd: 114.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B08R5JPTMZ" }
    ]
  },
  {
    id: "psu-corsair-rm750e",
    brand: "Corsair",
    model: "RM750e (2023) 750W 80+ Gold ATX 3.0",
    category: "psu",
    release_year: 2023,
    trust: {
      overall_trust_score: 93,
      spec_accuracy_score: 96,
      fake_review_resistance: 92,
      rma_reliability_score: 93,
      independent_lab_tested: true,
      known_issues_flagged: ["Compact 140mm housing uses slightly smaller fan curve than RMx series."]
    },
    specs: {
      wattage: 750,
      efficiency_rating: "80+ Gold",
      form_factor: "ATX",
      modularity: "Full",
      pcie_5_ready: true,
      length_mm: 140
    },
    offers: [
      { merchant: "amazon", price_usd: 99.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BYR1BXC6" }
    ]
  },
  {
    id: "psu-corsair-sf750-2024",
    brand: "Corsair",
    model: "SF750 (2024) 750W 80+ Platinum SFX",
    category: "psu",
    release_year: 2024,
    trust: {
      overall_trust_score: 98,
      spec_accuracy_score: 99,
      fake_review_resistance: 98,
      rma_reliability_score: 99,
      independent_lab_tested: true,
      known_issues_flagged: ["Gold-standard SFF power supply. ATX 3.1 PCIe 5.1 native 12V-2x6 cable included."]
    },
    specs: {
      wattage: 750,
      efficiency_rating: "80+ Platinum",
      form_factor: "SFX",
      modularity: "Full",
      pcie_5_ready: true,
      length_mm: 100
    },
    offers: [
      { merchant: "amazon", price_usd: 179.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0D5BN5B37" }
    ]
  },
  {
    id: "psu-seasonic-focus-1000",
    brand: "Seasonic",
    model: "FOCUS GX-1000 ATX 3.0 1000W 80+ Gold",
    category: "psu",
    release_year: 2023,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 97,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      wattage: 1000,
      efficiency_rating: "80+ Gold",
      form_factor: "ATX",
      modularity: "Full",
      pcie_5_ready: true,
      length_mm: 140
    },
    offers: [
      { merchant: "amazon", price_usd: 159.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BVM9CG2N" }
    ]
  },

  // ==========================================
  // MEMORY (RAM)
  // ==========================================
  {
    id: "ram-corsair-vengeance-32gb-6000",
    brand: "Corsair",
    model: "Vengeance DDR5 32GB (2x16GB) 6000MHz CL30 AMD EXPO",
    category: "ram",
    release_year: 2023,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 95,
      rma_reliability_score: 96,
      independent_lab_tested: true,
      known_issues_flagged: ["Optimal 6000 MT/s CL30 memory sweet spot for AMD Ryzen 7000/9000 memory controllers."]
    },
    specs: {
      type: "DDR5",
      capacity_gb: 32,
      speed_mhz: 6000,
      cas_latency: 30,
      modules: "2x16GB",
      rgb: false,
      profile_support: ["EXPO", "XMP 3.0"]
    },
    offers: [
      { merchant: "amazon", price_usd: 119.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BFN8QT92" }
    ]
  },
  {
    id: "ram-gskill-flare-x5-32gb",
    brand: "G.Skill",
    model: "Flare X5 Series 32GB (2x16GB) DDR5-6000 CL30",
    category: "ram",
    release_year: 2023,
    trust: {
      overall_trust_score: 95,
      spec_accuracy_score: 97,
      fake_review_resistance: 95,
      rma_reliability_score: 95,
      independent_lab_tested: true,
      known_issues_flagged: ["Low-profile 33mm height fits cleanly under large dual-tower air coolers."]
    },
    specs: {
      type: "DDR5",
      capacity_gb: 32,
      speed_mhz: 6000,
      cas_latency: 30,
      modules: "2x16GB",
      rgb: false,
      profile_support: ["EXPO"]
    },
    offers: [
      { merchant: "amazon", price_usd: 104.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BFGB2D2Z" }
    ]
  },
  {
    id: "ram-corsair-lpx-32gb-ddr4",
    brand: "Corsair",
    model: "Vengeance LPX DDR4 32GB (2x16GB) 3600MHz CL16",
    category: "ram",
    release_year: 2020,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 97,
      independent_lab_tested: true,
      known_issues_flagged: ["DDR4 memory generation. Incompatible with AM5 or DDR5-only motherboards."]
    },
    specs: {
      type: "DDR4",
      capacity_gb: 32,
      speed_mhz: 3600,
      cas_latency: 16,
      modules: "2x16GB",
      rgb: false,
      profile_support: ["XMP 2.0"]
    },
    offers: [
      { merchant: "amazon", price_usd: 74.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B07ZPLM1R1" }
    ]
  },

  // ==========================================
  // STORAGE (NVME SSDS)
  // ==========================================
  {
    id: "ssd-samsung-990-pro-2tb",
    brand: "Samsung",
    model: "990 PRO 2TB PCIe 4.0 M.2 NVMe SSD",
    category: "storage",
    release_year: 2022,
    trust: {
      overall_trust_score: 96,
      spec_accuracy_score: 98,
      fake_review_resistance: 96,
      rma_reliability_score: 97,
      independent_lab_tested: true,
      known_issues_flagged: ["Early firmware health-drop bug resolved by Samsung firmware update v1B2QJXD7 in 2023."]
    },
    specs: {
      form_factor: "M.2 2280",
      capacity_gb: 2000,
      interface: "PCIe 4.0 x4",
      read_speed_mbps: 7450,
      write_speed_mbps: 6900,
      tbw_endurance: 1200,
      has_dram_cache: true
    },
    offers: [
      { merchant: "amazon", price_usd: 169.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0BHJJ9351" },
      { merchant: "newegg", price_usd: 169.99, in_stock: true, direct_url: "https://www.newegg.com/p/N82E16820147861" }
    ]
  },
  {
    id: "ssd-wd-black-sn850x-2tb",
    brand: "Western Digital",
    model: "WD_BLACK SN850X 2TB PCIe Gen4 NVMe",
    category: "storage",
    release_year: 2022,
    trust: {
      overall_trust_score: 97,
      spec_accuracy_score: 98,
      fake_review_resistance: 97,
      rma_reliability_score: 98,
      independent_lab_tested: true,
      known_issues_flagged: []
    },
    specs: {
      form_factor: "M.2 2280",
      capacity_gb: 2000,
      interface: "PCIe 4.0 x4",
      read_speed_mbps: 7300,
      write_speed_mbps: 6600,
      tbw_endurance: 1200,
      has_dram_cache: true
    },
    offers: [
      { merchant: "amazon", price_usd: 149.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0B7CMZ3QH" }
    ]
  },
  {
    id: "ssd-crucial-t700-2tb",
    brand: "Crucial",
    model: "T700 2TB PCIe Gen5 NVMe SSD",
    category: "storage",
    release_year: 2023,
    trust: {
      overall_trust_score: 91,
      spec_accuracy_score: 95,
      fake_review_resistance: 93,
      rma_reliability_score: 92,
      independent_lab_tested: true,
      known_issues_flagged: ["PCIe 5.0 speed produces high heat (upwards of 80°C). Requires active motherboard heatsink or air cooler airflow to prevent thermal throttling."]
    },
    specs: {
      form_factor: "M.2 2280",
      capacity_gb: 2000,
      interface: "PCIe 5.0 x4",
      read_speed_mbps: 12400,
      write_speed_mbps: 11800,
      tbw_endurance: 1200,
      has_dram_cache: true
    },
    offers: [
      { merchant: "amazon", price_usd: 259.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0C3K7W8C3" }
    ]
  },
  {
    id: "ssd-crucial-p3-plus-1tb",
    brand: "Crucial",
    model: "P3 Plus 1TB PCIe 4.0 3D NAND NVMe",
    category: "storage",
    release_year: 2022,
    trust: {
      overall_trust_score: 76,
      spec_accuracy_score: 79,
      fake_review_resistance: 84,
      rma_reliability_score: 80,
      independent_lab_tested: true,
      known_issues_flagged: [
        "QLC NAND architecture: Sustained write speeds drop under 100 MB/s once dynamic SLC cache is exhausted during large file transfers.",
        "DRAM-less controller design relies on Host Memory Buffer (HMB)."
      ]
    },
    specs: {
      form_factor: "M.2 2280",
      capacity_gb: 1000,
      interface: "PCIe 4.0 x4",
      read_speed_mbps: 5000,
      write_speed_mbps: 3600,
      tbw_endurance: 220,
      has_dram_cache: false
    },
    offers: [
      { merchant: "amazon", price_usd: 68.99, in_stock: true, direct_url: "https://www.amazon.com/dp/B0B25NXWC7" }
    ]
  }
];
