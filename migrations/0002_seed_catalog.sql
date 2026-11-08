-- Seed Catalog for SpecTrust D1 Database

INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-amd-7800x3d', 'AMD', 'Ryzen 7 7800X3D', 'cpu', 2023,
  97, 98, 95, 98,
  1, '[]', '{"socket":"AM5","cores":8,"threads":16,"base_clock_ghz":4.2,"boost_clock_ghz":5,"tdp_watts":120,"pcie_version":"PCIe 5.0","integrated_gpu":true,"cooler_included":false}', 449.99,
  'AM5', NULL, 120, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7800x3d', 'amazon', 449.99, 1, 'https://www.amazon.com/dp/B0BTZB7F88', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7800x3d', 'newegg', 459.99, 1, 'https://www.newegg.com/p/N82E16819113793', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7800x3d', 'bestbuy', 449.99, 0, 'https://www.bestbuy.com/site/amd-ryzen-7-7800x3d/6537004.p', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-amd-9800x3d', 'AMD', 'Ryzen 7 9800X3D', 'cpu', 2024,
  98, 99, 96, 98,
  1, '["High launch demand; verify MSRP pricing against scalper listings."]', '{"socket":"AM5","cores":8,"threads":16,"base_clock_ghz":4.7,"boost_clock_ghz":5.2,"tdp_watts":120,"pcie_version":"PCIe 5.0","integrated_gpu":true,"cooler_included":false}', 479.99,
  'AM5', NULL, 120, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-9800x3d', 'amazon', 479.99, 1, 'https://www.amazon.com/dp/B0DKKCW9K7', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-9800x3d', 'newegg', 479.99, 1, 'https://www.newegg.com/p/N82E16819113864', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-amd-7600x', 'AMD', 'Ryzen 5 7600X', 'cpu', 2022,
  94, 96, 92, 95,
  1, '["Aggressive boost algorithm targets 95°C under sustained AVX load by design."]', '{"socket":"AM5","cores":6,"threads":12,"base_clock_ghz":4.7,"boost_clock_ghz":5.3,"tdp_watts":105,"pcie_version":"PCIe 5.0","integrated_gpu":true,"cooler_included":false}', 199.99,
  'AM5', NULL, 105, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7600x', 'amazon', 199.99, 1, 'https://www.amazon.com/dp/B0BBJDS62N', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7600x', 'newegg', 204.99, 1, 'https://www.newegg.com/p/N82E16819113770', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-amd-7950x3d', 'AMD', 'Ryzen 9 7950X3D', 'cpu', 2023,
  92, 94, 91, 94,
  1, '["Asymmetric CCD architecture requires AMD 3D V-Cache Optimizer driver and Windows Game Bar to ensure games park on cache CCD."]', '{"socket":"AM5","cores":16,"threads":32,"base_clock_ghz":4.2,"boost_clock_ghz":5.7,"tdp_watts":120,"pcie_version":"PCIe 5.0","integrated_gpu":true,"cooler_included":false}', 599.99,
  'AM5', NULL, 120, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7950x3d', 'amazon', 599.99, 1, 'https://www.amazon.com/dp/B0BTRH9MNS', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-7950x3d', 'newegg', 609.99, 1, 'https://www.newegg.com/p/N82E16819113791', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-amd-5700x3d', 'AMD', 'Ryzen 7 5700X3D', 'cpu', 2024,
  96, 98, 95, 97,
  1, '["AM4 legacy socket. Requires DDR4 RAM and cannot upgrade to DDR5 or AM5 without motherboard replacement."]', '{"socket":"AM4","cores":8,"threads":16,"base_clock_ghz":3,"boost_clock_ghz":4.1,"tdp_watts":105,"pcie_version":"PCIe 4.0","integrated_gpu":false,"cooler_included":false}', 209.99,
  'AM4', NULL, 105, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-5700x3d', 'amazon', 209.99, 1, 'https://www.amazon.com/dp/B0CQ4H4H7X', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-amd-5700x3d', 'newegg', 209.99, 1, 'https://www.newegg.com/p/N82E16819113812', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-intel-14700k', 'Intel', 'Core i7-14700K', 'cpu', 2023,
  79, 82, 88, 74,
  1, '["Elevated voltage degradation issue reported on 13th/14th Gen Intel CPUs. Requires motherboard BIOS update with 0x129/0x12B microcode.","High power consumption under unlimited PL2 (can draw upwards of 280W under stress)."]', '{"socket":"LGA1700","cores":20,"threads":28,"base_clock_ghz":3.4,"boost_clock_ghz":5.6,"tdp_watts":253,"pcie_version":"PCIe 5.0","integrated_gpu":true,"cooler_included":false}', 359.99,
  'LGA1700', NULL, 253, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-intel-14700k', 'amazon', 359.99, 1, 'https://www.amazon.com/dp/B0CGJ41K6M', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-intel-14700k', 'newegg', 364.99, 1, 'https://www.newegg.com/p/N82E16819118464', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-intel-13600k', 'Intel', 'Core i5-13600K', 'cpu', 2022,
  93, 96, 94, 91,
  1, '["Update motherboard BIOS to latest microcode to ensure stability compliance."]', '{"socket":"LGA1700","cores":14,"threads":20,"base_clock_ghz":3.5,"boost_clock_ghz":5.1,"tdp_watts":181,"pcie_version":"PCIe 5.0","integrated_gpu":true,"cooler_included":false}', 259.99,
  'LGA1700', NULL, 181, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-intel-13600k', 'amazon', 259.99, 1, 'https://www.amazon.com/dp/B0BCDR9M33', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-intel-13600k', 'newegg', 264.99, 1, 'https://www.newegg.com/p/N82E16819118416', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cpu-intel-12600kf', 'Intel', 'Core i5-12600KF', 'cpu', 2021,
  95, 97, 95, 96,
  1, '["''KF'' sku lacks integrated GPU. Dedicated graphics card required to boot."]', '{"socket":"LGA1700","cores":10,"threads":16,"base_clock_ghz":3.7,"boost_clock_ghz":4.9,"tdp_watts":150,"pcie_version":"PCIe 5.0","integrated_gpu":false,"cooler_included":false}', 154.99,
  'LGA1700', NULL, 150, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cpu-intel-12600kf', 'amazon', 154.99, 1, 'https://www.amazon.com/dp/B09FXFJW2F', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-nvidia-4090-fe', 'NVIDIA', 'GeForce RTX 4090 Founders Edition 24GB', 'gpu', 2022,
  94, 98, 95, 91,
  1, '["12VHPWR connector must be fully clicked into socket; improper seating can cause terminal melting under 450W sustained loads."]', '{"chipset":"RTX 4090","vram_gb":24,"length_mm":304,"slot_thickness":3,"tdp_watts":450,"recommended_psu_watts":1000,"power_connectors":"1x 16-pin (12VHPWR)"}', 1599.99,
  NULL, NULL, 450, 304
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-nvidia-4090-fe', 'bestbuy', 1599.99, 0, 'https://www.bestbuy.com/site/nvidia-geforce-rtx-4090-24gb/6521430.p', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-nvidia-4090-fe', 'amazon', 1799.99, 1, 'https://www.amazon.com/dp/B0BHC69CFF', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-msi-4080s-slim', 'MSI', 'GeForce RTX 4080 SUPER 16G GAMING X SLIM', 'gpu', 2024,
  95, 97, 94, 95,
  1, '[]', '{"chipset":"RTX 4080 SUPER","vram_gb":16,"length_mm":322,"slot_thickness":3,"tdp_watts":320,"recommended_psu_watts":850,"power_connectors":"1x 16-pin (12VHPWR)"}', 999.99,
  NULL, NULL, 320, 322
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-msi-4080s-slim', 'amazon', 999.99, 1, 'https://www.amazon.com/dp/B0CSG6K1S7', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-msi-4080s-slim', 'newegg', 1019.99, 1, 'https://www.newegg.com/p/N82E16814137870', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-asus-tuf-4070ts', 'ASUS', 'TUF Gaming GeForce RTX 4070 Ti SUPER 16GB', 'gpu', 2024,
  95, 97, 94, 94,
  1, '[]', '{"chipset":"RTX 4070 Ti SUPER","vram_gb":16,"length_mm":305,"slot_thickness":3.25,"tdp_watts":285,"recommended_psu_watts":750,"power_connectors":"1x 16-pin (12VHPWR)"}', 799.99,
  NULL, NULL, 285, 305
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-asus-tuf-4070ts', 'amazon', 799.99, 1, 'https://www.amazon.com/dp/B0CSK759F7', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-asus-tuf-4070ts', 'newegg', 819.99, 1, 'https://www.newegg.com/p/N82E16814126690', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-gigabyte-4070s-windforce', 'Gigabyte', 'GeForce RTX 4070 SUPER WINDFORCE OC 12GB', 'gpu', 2024,
  95, 97, 94, 95,
  1, '[]', '{"chipset":"RTX 4070 SUPER","vram_gb":12,"length_mm":261,"slot_thickness":2.5,"tdp_watts":220,"recommended_psu_watts":650,"power_connectors":"1x 16-pin (12VHPWR)"}', 599.99,
  NULL, NULL, 220, 261
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-gigabyte-4070s-windforce', 'amazon', 599.99, 1, 'https://www.amazon.com/dp/B0CSTZ1R64', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-gigabyte-4070s-windforce', 'newegg', 599.99, 1, 'https://www.newegg.com/p/N82E16814932684', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-sapphire-pulse-7800xt', 'Sapphire', 'PULSE AMD Radeon RX 7800 XT 16GB', 'gpu', 2023,
  96, 97, 96, 96,
  1, '[]', '{"chipset":"RX 7800 XT","vram_gb":16,"length_mm":280,"slot_thickness":2.5,"tdp_watts":263,"recommended_psu_watts":700,"power_connectors":"2x 8-pin"}', 489.99,
  NULL, NULL, 263, 280
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-sapphire-pulse-7800xt', 'amazon', 489.99, 1, 'https://www.amazon.com/dp/B0CGHQ325Z', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-sapphire-pulse-7800xt', 'newegg', 499.99, 1, 'https://www.newegg.com/p/N82E16814202434', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-powercolor-7900gre', 'PowerColor', 'Hellhound AMD Radeon RX 7900 GRE 16GB', 'gpu', 2024,
  95, 96, 95, 96,
  1, '[]', '{"chipset":"RX 7900 GRE","vram_gb":16,"length_mm":322,"slot_thickness":2.5,"tdp_watts":260,"recommended_psu_watts":750,"power_connectors":"2x 8-pin"}', 539.99,
  NULL, NULL, 260, 322
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-powercolor-7900gre', 'amazon', 539.99, 1, 'https://www.amazon.com/dp/B0CSK759F8', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-zotac-4060ti-twin', 'ZOTAC', 'Gaming GeForce RTX 4060 Ti 8GB Twin Edge', 'gpu', 2023,
  87, 94, 89, 91,
  1, '["8GB VRAM limit can cause stutter in high-res raytracing texture packs."]', '{"chipset":"RTX 4060 Ti","vram_gb":8,"length_mm":225.5,"slot_thickness":2.2,"tdp_watts":160,"recommended_psu_watts":500,"power_connectors":"1x 8-pin"}', 379.99,
  NULL, NULL, 160, 225.5
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-zotac-4060ti-twin', 'amazon', 379.99, 1, 'https://www.amazon.com/dp/B0C49F3K1T', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'gpu-asus-dual-4060', 'ASUS', 'Dual GeForce RTX 4060 V2 OC 8GB', 'gpu', 2023,
  92, 95, 92, 94,
  1, '["PCIe 4.0 x8 bus width. Slight performance drop when used on PCIe 3.0 motherboards."]', '{"chipset":"RTX 4060","vram_gb":8,"length_mm":227,"slot_thickness":2.5,"tdp_watts":115,"recommended_psu_watts":500,"power_connectors":"1x 8-pin"}', 299.99,
  NULL, NULL, 115, 227
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'gpu-asus-dual-4060', 'amazon', 299.99, 1, 'https://www.amazon.com/dp/B0C774VN89', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'mobo-msi-b650-tomahawk', 'MSI', 'MAG B650 TOMAHAWK WIFI', 'motherboard', 2022,
  95, 96, 94, 95,
  1, '["Initial cold boots can exhibit 60-90s memory training on early AM5 BIOS revisions."]', '{"socket":"AM5","form_factor":"ATX","chipset":"B650","ram_type":"DDR5","ram_slots":4,"max_ram_gb":192,"pcie_5_support":false,"m2_slots":3,"wifi_included":true}', 199.99,
  'AM5', 'ATX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-msi-b650-tomahawk', 'amazon', 199.99, 1, 'https://www.amazon.com/dp/B0BHCCP83V', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-msi-b650-tomahawk', 'newegg', 199.99, 1, 'https://www.newegg.com/p/N82E16813144557', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'mobo-gigabyte-b650i-aorus', 'Gigabyte', 'B650I AORUS ULTRA Mini-ITX', 'motherboard', 2023,
  91, 93, 90, 90,
  1, '["Stacked M.2 heatsink can interfere with extra-wide low-profile CPU coolers."]', '{"socket":"AM5","form_factor":"Mini-ITX","chipset":"B650","ram_type":"DDR5","ram_slots":2,"max_ram_gb":96,"pcie_5_support":true,"m2_slots":3,"wifi_included":true}', 249.99,
  'AM5', 'Mini-ITX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-gigabyte-b650i-aorus', 'amazon', 249.99, 1, 'https://www.amazon.com/dp/B0BV8XGKBV', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'mobo-asrock-b650m-prors', 'ASRock', 'B650M Pro RS WiFi Micro-ATX', 'motherboard', 2023,
  94, 96, 93, 95,
  1, '["Strong VRM design verified by Hardware Unboxed testing at under $150."]', '{"socket":"AM5","form_factor":"Micro-ATX","chipset":"B650","ram_type":"DDR5","ram_slots":4,"max_ram_gb":192,"pcie_5_support":true,"m2_slots":3,"wifi_included":true}', 149.99,
  'AM5', 'Micro-ATX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-asrock-b650m-prors', 'newegg', 149.99, 1, 'https://www.newegg.com/p/N82E16813162130', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'mobo-asus-z790-e', 'ASUS', 'ROG STRIX Z790-E GAMING WIFI II', 'motherboard', 2023,
  89, 92, 87, 88,
  1, '["Ensure Intel Baseline / Default profile is enabled in UEFI to prevent microcode degradation."]', '{"socket":"LGA1700","form_factor":"ATX","chipset":"Z790","ram_type":"DDR5","ram_slots":4,"max_ram_gb":192,"pcie_5_support":true,"m2_slots":5,"wifi_included":true}', 429.99,
  'LGA1700', 'ATX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-asus-z790-e', 'amazon', 429.99, 1, 'https://www.amazon.com/dp/B0CHMVY3V2', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'mobo-msi-b760-tomahawk', 'MSI', 'MAG B760 TOMAHAWK WIFI', 'motherboard', 2023,
  93, 95, 92, 94,
  1, '["Does not support manual CPU core multiplier overclocking (B-series limitation)."]', '{"socket":"LGA1700","form_factor":"ATX","chipset":"B760","ram_type":"DDR5","ram_slots":4,"max_ram_gb":192,"pcie_5_support":true,"m2_slots":3,"wifi_included":true}', 179.99,
  'LGA1700', 'ATX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-msi-b760-tomahawk', 'amazon', 179.99, 1, 'https://www.amazon.com/dp/B0BNWD836Y', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'mobo-msi-b550-a-pro', 'MSI', 'B550-A PRO', 'motherboard', 2020,
  95, 98, 96, 96,
  1, '["AM4 legacy socket. Strictly requires DDR4 memory."]', '{"socket":"AM4","form_factor":"ATX","chipset":"B550","ram_type":"DDR4","ram_slots":4,"max_ram_gb":128,"pcie_5_support":false,"m2_slots":2,"wifi_included":false}', 109.99,
  'AM4', 'ATX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'mobo-msi-b550-a-pro', 'amazon', 109.99, 1, 'https://www.amazon.com/dp/B089CZSQB4', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cooler-thermalright-pa120se', 'Thermalright', 'Peerless Assassin 120 SE', 'cooler', 2022,
  98, 99, 97, 98,
  1, '["Gamers Nexus Best Air Cooler award: rivals $100 heatsinks at $35 MSRP."]', '{"type":"Air","height_mm":155,"supported_sockets":["AM5","AM4","LGA1700","LGA1200"],"max_tdp_dissipation_watts":245}', 34.9,
  'AM5', NULL, 245, 155
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cooler-thermalright-pa120se', 'amazon', 34.9, 1, 'https://www.amazon.com/dp/B09LGY38L4', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cooler-thermalright-phantom-spirit', 'Thermalright', 'Phantom Spirit 120 SE', 'cooler', 2023,
  99, 99, 98, 99,
  1, '["Upgraded 7-heatpipe successor to Peerless Assassin."]', '{"type":"Air","height_mm":154,"supported_sockets":["AM5","AM4","LGA1700","LGA1851"],"max_tdp_dissipation_watts":260}', 35.9,
  'AM5', NULL, 260, 154
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cooler-thermalright-phantom-spirit', 'amazon', 35.9, 1, 'https://www.amazon.com/dp/B0BNDTJVPL', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cooler-noctua-nh-d15', 'Noctua', 'NH-D15 chromax.black', 'cooler', 2019,
  97, 99, 98, 99,
  1, '["Large 165mm height requires wide PC cases. Front 140mm fan may need upward adjustment for tall RGB RAM."]', '{"type":"Air","height_mm":165,"supported_sockets":["AM5","AM4","LGA1700","LGA1851"],"max_tdp_dissipation_watts":250}', 119.95,
  'AM5', NULL, 250, 165
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cooler-noctua-nh-d15', 'amazon', 119.95, 1, 'https://www.amazon.com/dp/B07Y87YHRH', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cooler-noctua-nh-l9a', 'Noctua', 'NH-L9a-AM5 chromax.black', 'cooler', 2023,
  97, 99, 98, 99,
  1, '["Ultra low profile (37mm). Rated strictly for 65W TDP CPUs (e.g. Ryzen 7600/7700 or Eco Mode)."]', '{"type":"Air","height_mm":37,"supported_sockets":["AM5"],"max_tdp_dissipation_watts":65}', 54.95,
  'AM5', NULL, 65, 37
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cooler-noctua-nh-l9a', 'amazon', 54.95, 1, 'https://www.amazon.com/dp/B0BTP9CMMZ', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cooler-arctic-liquid-freezer-360', 'ARCTIC', 'Liquid Freezer III 360 AIO', 'cooler', 2024,
  96, 98, 96, 95,
  1, '["Radiator is extra thick (38mm vs standard 27mm). Ensure case ceiling has at least 65mm clearance from motherboard VRM heatsinks."]', '{"type":"AIO 360","height_mm":53,"radiator_size_mm":360,"supported_sockets":["AM5","AM4","LGA1700","LGA1851"],"max_tdp_dissipation_watts":320}', 104.99,
  'AM5', NULL, 320, 53
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cooler-arctic-liquid-freezer-360', 'amazon', 104.99, 1, 'https://www.amazon.com/dp/B09VH1DKV3', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'cooler-arctic-liquid-freezer-240', 'ARCTIC', 'Liquid Freezer III 240 AIO', 'cooler', 2024,
  96, 98, 96, 96,
  1, '[]', '{"type":"AIO 240","height_mm":53,"radiator_size_mm":240,"supported_sockets":["AM5","AM4","LGA1700","LGA1851"],"max_tdp_dissipation_watts":270}', 84.99,
  'AM5', NULL, 270, 53
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'cooler-arctic-liquid-freezer-240', 'amazon', 84.99, 1, 'https://www.amazon.com/dp/B09VH3798R', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'case-fractal-north', 'Fractal Design', 'North ATX Charcoal Black (Mesh/Glass)', 'case', 2022,
  97, 98, 96, 98,
  1, '[]', '{"form_factor":"Mid Tower","supported_motherboards":["Mini-ITX","Micro-ATX","ATX"],"max_gpu_length_mm":355,"max_cooler_height_mm":170,"max_psu_length_mm":255,"included_fans":2}', 139.99,
  NULL, 'Mid Tower', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-fractal-north', 'amazon', 139.99, 1, 'https://www.amazon.com/dp/B09V8687K6', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-fractal-north', 'newegg', 139.99, 1, 'https://www.newegg.com/p/N82E16811352204', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'case-fractal-terra', 'Fractal Design', 'Terra Mini-ITX Silver', 'case', 2023,
  95, 96, 95, 96,
  1, '["Only supports Mini-ITX motherboards and SFX/SFX-L power supplies. Air cooler height is tightly coupled with GPU width."]', '{"form_factor":"Mini-ITX","supported_motherboards":["Mini-ITX"],"max_gpu_length_mm":322,"max_cooler_height_mm":77,"max_psu_length_mm":130,"included_fans":0}', 179.99,
  NULL, 'Mini-ITX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-fractal-terra', 'amazon', 179.99, 1, 'https://www.amazon.com/dp/B0BYZMT9V4', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'case-lianli-o11-evo', 'Lian Li', 'O11 Dynamic EVO Black', 'case', 2022,
  96, 97, 95, 97,
  1, '["Does not include pre-installed fans; requires separate purchase."]', '{"form_factor":"Mid Tower","supported_motherboards":["Mini-ITX","Micro-ATX","ATX","E-ATX"],"max_gpu_length_mm":422,"max_cooler_height_mm":167,"max_psu_length_mm":220,"included_fans":0}', 149.99,
  NULL, 'Mid Tower', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-lianli-o11-evo', 'amazon', 149.99, 1, 'https://www.amazon.com/dp/B09QHLY81G', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'case-corsair-4000d', 'Corsair', '4000D Airflow Black', 'case', 2020,
  96, 98, 95, 97,
  1, '[]', '{"form_factor":"Mid Tower","supported_motherboards":["Mini-ITX","Micro-ATX","ATX"],"max_gpu_length_mm":360,"max_cooler_height_mm":170,"max_psu_length_mm":220,"included_fans":2}', 89.99,
  NULL, 'Mid Tower', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-corsair-4000d', 'amazon', 89.99, 1, 'https://www.amazon.com/dp/B08C7BGV3D', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'case-nzxt-h5-flow', 'NZXT', 'H5 Flow (2024) All-Black', 'case', 2024,
  95, 97, 94, 96,
  1, '[]', '{"form_factor":"Mid Tower","supported_motherboards":["Mini-ITX","Micro-ATX","ATX"],"max_gpu_length_mm":365,"max_cooler_height_mm":165,"max_psu_length_mm":200,"included_fans":2}', 89.99,
  NULL, 'Mid Tower', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-nzxt-h5-flow', 'amazon', 89.99, 1, 'https://www.amazon.com/dp/B0DCG6N53B', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'case-coolermaster-nr200p', 'Cooler Master', 'MasterBox NR200P V2 Mini-ITX', 'case', 2024,
  94, 96, 93, 95,
  1, '["Vertical GPU mount only. Requires SFX/SFX-L power supply."]', '{"form_factor":"Mini-ITX","supported_motherboards":["Mini-ITX"],"max_gpu_length_mm":356,"max_cooler_height_mm":67,"max_psu_length_mm":130,"included_fans":2}', 114.99,
  NULL, 'Mini-ITX', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'case-coolermaster-nr200p', 'amazon', 114.99, 1, 'https://www.amazon.com/dp/B0CRVTKB5J', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'psu-corsair-rm850x', 'Corsair', 'RM850x (2021) 850W 80+ Gold', 'psu', 2021,
  97, 99, 98, 98,
  1, '["Cultists Tier A Gold standard."]', '{"wattage":850,"efficiency_rating":"80+ Gold","form_factor":"ATX","modularity":"Full","pcie_5_ready":false,"length_mm":160}', 114.99,
  NULL, 'ATX', NULL, 160
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'psu-corsair-rm850x', 'amazon', 114.99, 1, 'https://www.amazon.com/dp/B08R5JPTMZ', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'psu-corsair-rm750e', 'Corsair', 'RM750e (2023) 750W 80+ Gold ATX 3.0', 'psu', 2023,
  93, 96, 92, 93,
  1, '["Compact 140mm housing uses slightly smaller fan curve than RMx series."]', '{"wattage":750,"efficiency_rating":"80+ Gold","form_factor":"ATX","modularity":"Full","pcie_5_ready":true,"length_mm":140}', 99.99,
  NULL, 'ATX', NULL, 140
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'psu-corsair-rm750e', 'amazon', 99.99, 1, 'https://www.amazon.com/dp/B0BYR1BXC6', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'psu-corsair-sf750-2024', 'Corsair', 'SF750 (2024) 750W 80+ Platinum SFX', 'psu', 2024,
  98, 99, 98, 99,
  1, '["Gold-standard SFF power supply. ATX 3.1 PCIe 5.1 native 12V-2x6 cable included."]', '{"wattage":750,"efficiency_rating":"80+ Platinum","form_factor":"SFX","modularity":"Full","pcie_5_ready":true,"length_mm":100}', 179.99,
  NULL, 'SFX', NULL, 100
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'psu-corsair-sf750-2024', 'amazon', 179.99, 1, 'https://www.amazon.com/dp/B0D5BN5B37', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'psu-seasonic-focus-1000', 'Seasonic', 'FOCUS GX-1000 ATX 3.0 1000W 80+ Gold', 'psu', 2023,
  96, 98, 96, 97,
  1, '[]', '{"wattage":1000,"efficiency_rating":"80+ Gold","form_factor":"ATX","modularity":"Full","pcie_5_ready":true,"length_mm":140}', 159.99,
  NULL, 'ATX', NULL, 140
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'psu-seasonic-focus-1000', 'amazon', 159.99, 1, 'https://www.amazon.com/dp/B0BVM9CG2N', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ram-corsair-vengeance-32gb-6000', 'Corsair', 'Vengeance DDR5 32GB (2x16GB) 6000MHz CL30 AMD EXPO', 'ram', 2023,
  96, 98, 95, 96,
  1, '["Optimal 6000 MT/s CL30 memory sweet spot for AMD Ryzen 7000/9000 memory controllers."]', '{"type":"DDR5","capacity_gb":32,"speed_mhz":6000,"cas_latency":30,"modules":"2x16GB","rgb":false,"profile_support":["EXPO","XMP 3.0"]}', 119.99,
  NULL, NULL, NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ram-corsair-vengeance-32gb-6000', 'amazon', 119.99, 1, 'https://www.amazon.com/dp/B0BFN8QT92', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ram-gskill-flare-x5-32gb', 'G.Skill', 'Flare X5 Series 32GB (2x16GB) DDR5-6000 CL30', 'ram', 2023,
  95, 97, 95, 95,
  1, '["Low-profile 33mm height fits cleanly under large dual-tower air coolers."]', '{"type":"DDR5","capacity_gb":32,"speed_mhz":6000,"cas_latency":30,"modules":"2x16GB","rgb":false,"profile_support":["EXPO"]}', 104.99,
  NULL, NULL, NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ram-gskill-flare-x5-32gb', 'amazon', 104.99, 1, 'https://www.amazon.com/dp/B0BFGB2D2Z', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ram-corsair-lpx-32gb-ddr4', 'Corsair', 'Vengeance LPX DDR4 32GB (2x16GB) 3600MHz CL16', 'ram', 2020,
  96, 98, 96, 97,
  1, '["DDR4 memory generation. Incompatible with AM5 or DDR5-only motherboards."]', '{"type":"DDR4","capacity_gb":32,"speed_mhz":3600,"cas_latency":16,"modules":"2x16GB","rgb":false,"profile_support":["XMP 2.0"]}', 74.99,
  NULL, NULL, NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ram-corsair-lpx-32gb-ddr4', 'amazon', 74.99, 1, 'https://www.amazon.com/dp/B07ZPLM1R1', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ssd-samsung-990-pro-2tb', 'Samsung', '990 PRO 2TB PCIe 4.0 M.2 NVMe SSD', 'storage', 2022,
  96, 98, 96, 97,
  1, '["Early firmware health-drop bug resolved by Samsung firmware update v1B2QJXD7 in 2023."]', '{"form_factor":"M.2 2280","capacity_gb":2000,"interface":"PCIe 4.0 x4","read_speed_mbps":7450,"write_speed_mbps":6900,"tbw_endurance":1200,"has_dram_cache":true}', 169.99,
  NULL, 'M.2 2280', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ssd-samsung-990-pro-2tb', 'amazon', 169.99, 1, 'https://www.amazon.com/dp/B0BHJJ9351', 2
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ssd-samsung-990-pro-2tb', 'newegg', 169.99, 1, 'https://www.newegg.com/p/N82E16820147861', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ssd-wd-black-sn850x-2tb', 'Western Digital', 'WD_BLACK SN850X 2TB PCIe Gen4 NVMe', 'storage', 2022,
  97, 98, 97, 98,
  1, '[]', '{"form_factor":"M.2 2280","capacity_gb":2000,"interface":"PCIe 4.0 x4","read_speed_mbps":7300,"write_speed_mbps":6600,"tbw_endurance":1200,"has_dram_cache":true}', 149.99,
  NULL, 'M.2 2280', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ssd-wd-black-sn850x-2tb', 'amazon', 149.99, 1, 'https://www.amazon.com/dp/B0B7CMZ3QH', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ssd-crucial-t700-2tb', 'Crucial', 'T700 2TB PCIe Gen5 NVMe SSD', 'storage', 2023,
  91, 95, 93, 92,
  1, '["PCIe 5.0 speed produces high heat (upwards of 80°C). Requires active motherboard heatsink or air cooler airflow to prevent thermal throttling."]', '{"form_factor":"M.2 2280","capacity_gb":2000,"interface":"PCIe 5.0 x4","read_speed_mbps":12400,"write_speed_mbps":11800,"tbw_endurance":1200,"has_dram_cache":true}', 259.99,
  NULL, 'M.2 2280', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ssd-crucial-t700-2tb', 'amazon', 259.99, 1, 'https://www.amazon.com/dp/B0C3K7W8C3', 2
);
INSERT OR REPLACE INTO products (
  id, brand, model, category, release_year,
  overall_trust_score, spec_accuracy_score, fake_review_resistance, rma_reliability_score,
  independent_lab_tested, known_issues_json, specs_json, lowest_price_usd,
  socket, form_factor, tdp_watts, max_dimension_mm
) VALUES (
  'ssd-crucial-p3-plus-1tb', 'Crucial', 'P3 Plus 1TB PCIe 4.0 3D NAND NVMe', 'storage', 2022,
  76, 79, 84, 80,
  1, '["QLC NAND architecture: Sustained write speeds drop under 100 MB/s once dynamic SLC cache is exhausted during large file transfers.","DRAM-less controller design relies on Host Memory Buffer (HMB)."]', '{"form_factor":"M.2 2280","capacity_gb":1000,"interface":"PCIe 4.0 x4","read_speed_mbps":5000,"write_speed_mbps":3600,"tbw_endurance":220,"has_dram_cache":false}', 68.99,
  NULL, 'M.2 2280', NULL, NULL
);
INSERT OR REPLACE INTO merchant_offers (
  product_id, merchant, price_usd, in_stock, direct_url, shipping_days
) VALUES (
  'ssd-crucial-p3-plus-1tb', 'amazon', 68.99, 1, 'https://www.amazon.com/dp/B0B25NXWC7', 2
);
