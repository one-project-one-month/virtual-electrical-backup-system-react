export const solarPanels = [
  {
    id: 1,
    type: "Monocrystalline",
    controller: "MPPT",
    outputWatt: 300,
    outputVolt: 24,
    length: 1650, // in mm
    width: 992, // in mm
  },
  {
    id: 2,
    type: "Polycrystalline",
    controller: "PWM",
    outputWatt: 250,
    outputVolt: 12,
    length: 1480, // in mm
    width: 670, // in mm
  },
  {
    id: 3,
    type: "Thin-Film",
    controller: "MPPT",
    outputWatt: 150,
    outputVolt: 24,
    length: 1200, // in mm
    width: 600, // in mm
  },
  {
    id: 4,
    type: "Bifacial",
    controller: "MPPT",
    outputWatt: 350,
    outputVolt: 48,
    length: 1800, // in mm
    width: 1000, // in mm
  },
  {
    id: 5,
    type: "Flexible",
    controller: "PWM",
    outputWatt: 200,
    outputVolt: 12,
    length: 1300, // in mm
    width: 700, // in mm
  },
];
