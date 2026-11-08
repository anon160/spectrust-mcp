import { Product } from "../types.js";

export const CATALOG: Product[] = [
  // ===================== CPUS =====================
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
      {
        merchant: "amazon",
        price_usd: 449.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BTZB7F88"
      },
      {
        merchant: "newegg",
        price_usd: 459.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16819113793"
      },
      {
        merchant: "bestbuy",
        price_usd: 449.99,
        in_stock: false,
        direct_url: "https://www.bestbuy.com/site/amd-ryzen-7-7800x3d/6537004.p"
      }
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
      known_issues_flagged: ["Runs hot by design (targets 95°C under heavy AVX-512 loads unless Eco Mode is enabled)."]
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
      {
        merchant: "amazon",
        price_usd: 199.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BBJDS62N"
      },
      {
        merchant: "newegg",
        price_usd: 204.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16819113770"
      }
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
      {
        merchant: "amazon",
        price_usd: 359.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0CGJ41K6M"
      },
      {
        merchant: "newegg",
        price_usd: 364.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16819118464"
      }
    ]
  },

  // ===================== GPUS =====================
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
      {
        merchant: "amazon",
        price_usd: 799.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0CSK759F7"
      },
      {
        merchant: "newegg",
        price_usd: 819.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16814126690"
      }
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
      {
        merchant: "amazon",
        price_usd: 489.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0CGHQ325Z"
      },
      {
        merchant: "newegg",
        price_usd: 499.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16814202434"
      }
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
      {
        merchant: "amazon",
        price_usd: 379.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0C49F3K1T"
      }
    ]
  },

  // ===================== MOTHERBOARDS =====================
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
      known_issues_flagged: ["First boot memory training can take up to 90 seconds on AM5 platforms."]
    },
    specs: {
      socket: "AM5",
      form_factor: "ATX",
      chipset: "B650",
      ram_type: "DDR5",
      ram_slots: 4,
      max_ram_gb: 192,
      pcie_5_support: false, // PCIe 4.0 on x16 slot
      m2_slots: 3,
      wifi_included: true
    },
    offers: [
      {
        merchant: "amazon",
        price_usd: 199.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BHCCP83V"
      },
      {
        merchant: "newegg",
        price_usd: 199.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16813144557"
      }
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
      known_issues_flagged: ["M.2 stack heatsink is tall; verify clearance with low-profile CPU air coolers."]
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
      {
        merchant: "amazon",
        price_usd: 249.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BV8XGKBV"
      }
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
      known_issues_flagged: ["Default ASUS Multi-Core Enhancement (MCE) pushes unsafe voltages; keep Intel Default Profile enabled."]
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
      {
        merchant: "amazon",
        price_usd: 429.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0CHMVY3V2"
      }
    ]
  },

  // ===================== COOLERS =====================
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
      known_issues_flagged: ["Independent lab benchmark verified: beats coolers 3x its price bracket."]
    },
    specs: {
      type: "Air",
      height_mm: 155,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1200"],
      max_tdp_dissipation_watts: 245
    },
    offers: [
      {
        merchant: "amazon",
        price_usd: 34.90,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B09LGY38L4"
      }
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
      known_issues_flagged: ["Designed for 65W TDP CPUs. Not recommended for 120W+ TDP CPUs without strict Eco Mode."]
    },
    specs: {
      type: "Air",
      height_mm: 37,
      supported_sockets: ["AM5"],
      max_tdp_dissipation_watts: 65
    },
    offers: [
      {
        merchant: "amazon",
        price_usd: 54.95,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BTP9CMMZ"
      }
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
      known_issues_flagged: ["Radiator is extra-thick (38mm vs standard 27mm). Ensure case top-mount has adequate motherboard clearance."]
    },
    specs: {
      type: "AIO 360",
      height_mm: 53,
      radiator_size_mm: 360,
      supported_sockets: ["AM5", "AM4", "LGA1700", "LGA1851"],
      max_tdp_dissipation_watts: 320
    },
    offers: [
      {
        merchant: "amazon",
        price_usd: 104.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B09VH1DKV3"
      }
    ]
  },

  // ===================== CASES =====================
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
      {
        merchant: "amazon",
        price_usd: 139.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B09V8687K6"
      },
      {
        merchant: "newegg",
        price_usd: 139.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16811352204"
      }
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
      max_psu_length_mm: 130, // SFX only
      included_fans: 0
    },
    offers: [
      {
        merchant: "amazon",
        price_usd: 179.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BYZMT9V4"
      }
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
      known_issues_flagged: ["Does not include pre-installed case fans; requires separate fan purchase."]
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
      {
        merchant: "amazon",
        price_usd: 149.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B09QHLY81G"
      }
    ]
  },

  // ===================== POWER SUPPLIES =====================
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
      known_issues_flagged: ["Tier A Gold-rated on Cybenetics and Cultists PSU tier list."]
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
      {
        merchant: "amazon",
        price_usd: 114.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B08R5JPTMZ"
      }
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
      known_issues_flagged: ["Gold-standard SFF power supply. Native ATX 3.1 / PCIe 5.1 12V-2x6 cable included."]
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
      {
        merchant: "amazon",
        price_usd: 179.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0D5BN5B37"
      }
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
      {
        merchant: "amazon",
        price_usd: 159.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BVM9CG2N"
      }
    ]
  },

  // ===================== MEMORY (RAM) =====================
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
      known_issues_flagged: ["Sweet-spot 6000 CL30 sub-timings for AMD AM5 memory controller stability."]
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
      {
        merchant: "amazon",
        price_usd: 119.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BFN8QT92"
      }
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
      {
        merchant: "amazon",
        price_usd: 104.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BFGB2D2Z"
      }
    ]
  },

  // ===================== STORAGE (SSDS) =====================
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
      {
        merchant: "amazon",
        price_usd: 169.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0BHJJ9351"
      },
      {
        merchant: "newegg",
        price_usd: 169.99,
        in_stock: true,
        direct_url: "https://www.newegg.com/p/N82E16820147861"
      }
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
      {
        merchant: "amazon",
        price_usd: 149.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0B7CMZ3QH"
      }
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
        "QLC NAND architecture: Sustained write speeds drop dramatically (under 100 MB/s) once the dynamic SLC cache is exhausted during large file transfers.",
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
      {
        merchant: "amazon",
        price_usd: 68.99,
        in_stock: true,
        direct_url: "https://www.amazon.com/dp/B0B25NXWC7"
      }
    ]
  }
];
