export const inverters  = [
  {
    id: 1,
    inverterType: 1,
    watt: 4000,
    waveType: "pure sine wave",
    model: "Conext SW 4024",
    brandId: 1,
    compatibleBattery: "Lithium-Ion Battery",
    inverterVolt: 24,
    inverterPrice: 599.99,
    image: "https://example.com/images/conext_sw_4024.jpg",
    description: "Eco-friendly inverter with pure sine wave output."
  },
  {
    id: 2,
    inverterType: 2,
    watt: 2000,
    waveType: "square wave",
    model: "Xantrex Freedom XC 2000",
    brandId: 2,
    compatibleBattery: "Gel Battery",
    inverterVolt: 12,
    inverterPrice: 1256.00,
    image: "https://example.com/images/xantrex_freedom_xc_2000.jpg",
    description: "Maximum efficiency inverter with square wave output."
  },
  {
    id: 3,
    inverterType: 3,
    watt: 4000,
    waveType: "quasi sine wave",
    model: "Victron MultiPlus 48/2000/50",
    brandId: 3,
    compatibleBattery: "Tubular Battery",
    inverterVolt: 48,
    inverterPrice: 839.00,
    image: "https://example.com/images/victron_multiplus_48_2000_50.jpg",
    description: "Minimal noise inverter with quasi sine wave output."
  },
  {
    id: 4,
    inverterType: 4,
    watt: 800,
    waveType: "modified square wave",
    model: "Go Power! GP-800",
    brandId: 4,
    compatibleBattery: "Flooded Lead-Acid Battery",
    inverterVolt: 12,
    inverterPrice: 1549.00,
    image: "https://example.com/images/go_power_gp_800.jpg",
    description: "Portable inverter with modified square wave output."
  },
  {
    id: 5,
    inverterType: 5,
    watt: 3000,
    waveType: "pure sine wave",
    model: "Growatt SPF 3000TL",
    brandId: 5,
    compatibleBattery: "AGM Battery",
    inverterVolt: 24,
    inverterPrice: 499.00,
    image: "https://example.com/images/growatt_spf_3000tl.jpg",
    description: "Heavy duty inverter with pure sine wave output."
  }
]

export const inverterTypes = [
  {
    id: 1,
    name: "Grid-tied inverter",
    efficiency : 80.5
  },
  {
    id: 2,
    name: "Solar inverter",
    efficiency : 60.5
  },
  {
    id: 3,
    name: "Hybrid inverter",
    efficiency : 73.8
  },
  {
    id: 4,
    name: "Standalone inverter",
    efficiency : 83.5
  },
  {
    id: 5,
    name: "Single Phase inverter",
    efficiency : 73.5
  },
]

export const waveTypes = [
  {
    id: 1,
    name: "pure sine wave",
  },
  {
    id: 2,
    name: "square wave",
  },
  {
    id: 3,
    name: "quasi sine wave",
  },
  {
    id: 4,
    name: "modified square wave",
  },
]
