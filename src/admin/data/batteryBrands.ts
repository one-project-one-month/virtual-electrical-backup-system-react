interface BatteryBrand {
  id: number;
  name: string;
}
export let batteryBrands: BatteryBrand[] = [
  { id: 1, name: "VoltMax" },
  { id: 2, name: "PowerCell" },
  { id: 3, name: "EnerGen" },
  { id: 4, name: "ChargeX" },
  { id: 5, name: "LithionPro" },
  { id: 6, name: "AmpereX" },
  { id: 7, name: "HyperCharge" },
  { id: 8, name: "EcoVolt" },
  { id: 9, name: "NanoPower" },
  { id: 10, name: "UltraCell" },
  { id: 11, name: "MaxCharge" },
  { id: 12, name: "SuperVolt" },
  { id: 13, name: "GreenCell" },
  { id: 14, name: "ThunderPower" },
  { id: 15, name: "MegaAmp" },
  { id: 16, name: "TitanCell" },
  { id: 17, name: "FusionCharge" },
  { id: 18, name: "NextGenBattery" },
  { id: 19, name: "RapidVolt" },
  { id: 20, name: "QuantumPower" },
];

export const addBatteryBrand = (newBatteryBrand: Omit<BatteryBrand, "id">) => {
  const newId = batteryBrands.length
    ? batteryBrands[batteryBrands.length - 1].id + 1
    : 1;
  const batteryBrandsWithId = { id: newId, ...newBatteryBrand };
  batteryBrands = [...batteryBrands, batteryBrandsWithId];
};
