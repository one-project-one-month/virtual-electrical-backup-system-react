interface Battery {
  id: number;
  brandName: string;
  brandType: string;
  storageAMP: number;
  voltage: number;
  price: number;
  description: string;
}

export let batteries: Battery[] = [
  {
    id: 1,
    brandName: "Duracell",
    brandType: "AA Alkaline",
    storageAMP: 2500,
    voltage: 1.5,
    price: 0.99,
    description: "Long-lasting AA battery, ideal for everyday devices.",
  },
  {
    id: 2,
    brandName: "Energizer",
    brandType: "AAA Rechargeable",
    storageAMP: 900,
    voltage: 1.2,
    price: 3.49,
    description: "Rechargeable AAA battery with a high cycle count.",
  },
  {
    id: 3,
    brandName: "Panasonic",
    brandType: "CR2032 Coin Cell",
    storageAMP: 220,
    voltage: 3,
    price: 1.25,
    description: "Small coin cell battery for watches and key fobs.",
  },
  {
    id: 4,
    brandName: "Samsung",
    brandType: "Lithium-ion",
    storageAMP: 3000,
    voltage: 3.7,
    price: 15.99,
    description: "High-capacity rechargeable battery for power banks.",
  },
  {
    id: 5,
    brandName: "Yuasa",
    brandType: "Lead-Acid",
    storageAMP: 12000,
    voltage: 12,
    price: 49.99,
    description: "Heavy-duty battery for automotive and backup power.",
  },
];

export const addBattery = (newBattery: Omit<Battery, "id">) => {
  const newId = batteries.length ? batteries[batteries.length - 1].id + 1 : 1;
  const batteryWithId = { id: newId, ...newBattery };
  batteries = [...batteries, batteryWithId];
};

export const updateBattery = (id: number, updatedData: Partial<Battery>) => {
  batteries = batteries.map((battery) =>
    battery.id === id ? { ...battery, ...updatedData } : battery
  );
};
