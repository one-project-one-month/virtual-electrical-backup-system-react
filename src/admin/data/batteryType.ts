interface BatteryType {
  id: number;
  name: string;
  percentage: string;
}

export let batteryTypes: BatteryType[] = [
  { id: 1, name: "Lithium-Ion", percentage: "95" },
  { id: 2, name: "Nickel-Cadmium", percentage: "85" },
  { id: 3, name: "Lead-Acid", percentage: "90" },
  { id: 4, name: "Nickel-Metal Hydride", percentage: "80" },
  { id: 5, name: "Alkaline", percentage: "70" },
  { id: 6, name: "Lithium-Polymer", percentage: "92" },
  { id: 7, name: "Zinc-Carbon", percentage: "60" },
  { id: 8, name: "Silver-Zinc", percentage: "75" },
  { id: 9, name: "Flow Battery", percentage: "88" },
  { id: 10, name: "Sodium-Ion", percentage: "72" },
  { id: 11, name: "Magnesium-Ion", percentage: "66" },
  { id: 12, name: "Calcium-Ion", percentage: "77" },
  { id: 13, name: "Solid-State", percentage: "94" },
  { id: 14, name: "Vanadium Redox", percentage: "79" },
  { id: 15, name: "Lead Carbon", percentage: "84" },
  { id: 16, name: "Potassium-Ion", percentage: "81" },
  { id: 17, name: "Aluminum-Ion", percentage: "68" },
  { id: 18, name: "Manganese-Ion", percentage: "70" },
  { id: 19, name: "Cobalt-Free Lithium", percentage: "91" },
  { id: 20, name: "Carbon Nanotube", percentage: "89" },
];

export const addBatteryType = (newBatteryTypes: Omit<BatteryType, "id">) => {
  const newId = batteryTypes.length
    ? batteryTypes[batteryTypes.length - 1].id + 1
    : 1;
  const batteryTypesWithId = { id: newId, ...newBatteryTypes };
  batteryTypes = [...batteryTypes, batteryTypesWithId];
};
