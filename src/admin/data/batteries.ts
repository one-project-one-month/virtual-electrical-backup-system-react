interface Battery {
  id: number;
  name: string;
  storage_amp: number;
  voltage: number;
  image: File | string;
  description: string;
  brand_id: number;
  type_id: number;
}

export let batteries: Battery[] = [
  {
    id: 1,
    name: "PowerMax 12V 100Ah",
    storage_amp: 100,
    voltage: 12,
    image: "https://via.placeholder.com/150",
    description: "Reliable deep-cycle battery for solar and backup power.",
    brand_id: 1,
    type_id: 2,
  },
  {
    id: 2,
    name: "EnerVolt 24V 200Ah",
    storage_amp: 200,
    voltage: 24,
    image: "https://via.placeholder.com/150",
    description: "High-capacity lithium battery with a long lifespan.",
    brand_id: 2,
    type_id: 3,
  },
  {
    id: 3,
    name: "SolarTech 48V 150Ah",
    storage_amp: 150,
    voltage: 48,
    image: "https://via.placeholder.com/150",
    description: "Perfect for solar energy storage applications.",
    brand_id: 3,
    type_id: 1,
  },
  {
    id: 4,
    name: "LithiumX 36V 50Ah",
    storage_amp: 50,
    voltage: 36,
    image: "https://via.placeholder.com/150",
    description: "Lightweight lithium battery ideal for golf carts.",
    brand_id: 4,
    type_id: 4,
  },
  {
    id: 5,
    name: "DeepCycle 12V 75Ah",
    storage_amp: 75,
    voltage: 12,
    image: "https://via.placeholder.com/150",
    description: "Durable battery designed for marine and RV applications.",
    brand_id: 1,
    type_id: 2,
  },
  {
    id: 6,
    name: "VoltGuard 24V 120Ah",
    storage_amp: 120,
    voltage: 24,
    image: "https://via.placeholder.com/150",
    description: "Premium lead-acid battery with extended durability.",
    brand_id: 2,
    type_id: 3,
  },
  {
    id: 7,
    name: "EcoCharge 48V 200Ah",
    storage_amp: 200,
    voltage: 48,
    image: "https://via.placeholder.com/150",
    description: "Eco-friendly battery solution for sustainable energy.",
    brand_id: 3,
    type_id: 1,
  },
  {
    id: 8,
    name: "MarineMax 12V 110Ah",
    storage_amp: 110,
    voltage: 12,
    image: "https://via.placeholder.com/150",
    description: "Perfect for boats and yachts, resistant to deep discharge.",
    brand_id: 4,
    type_id: 2,
  },
  {
    id: 9,
    name: "SolarLite 24V 80Ah",
    storage_amp: 80,
    voltage: 24,
    image: "https://via.placeholder.com/150",
    description: "Optimized for off-grid solar installations.",
    brand_id: 1,
    type_id: 1,
  },
  {
    id: 10,
    name: "UltraVolt 36V 100Ah",
    storage_amp: 100,
    voltage: 36,
    image: "https://via.placeholder.com/150",
    description: "Heavy-duty battery for electric vehicles.",
    brand_id: 2,
    type_id: 4,
  },
  {
    id: 11,
    name: "MaxCharge 12V 200Ah",
    storage_amp: 200,
    voltage: 12,
    image: "https://via.placeholder.com/150",
    description: "Long-lasting power solution for commercial use.",
    brand_id: 3,
    type_id: 2,
  },
  {
    id: 12,
    name: "EcoLith 24V 150Ah",
    storage_amp: 150,
    voltage: 24,
    image: "https://via.placeholder.com/150",
    description: "High-performance lithium-ion battery for energy storage.",
    brand_id: 4,
    type_id: 3,
  },
  {
    id: 13,
    name: "SolarPro 48V 250Ah",
    storage_amp: 250,
    voltage: 48,
    image: "https://via.placeholder.com/150",
    description: "High-capacity storage for large solar systems.",
    brand_id: 1,
    type_id: 1,
  },
  {
    id: 14,
    name: "PowerSafe 12V 90Ah",
    storage_amp: 90,
    voltage: 12,
    image: "https://via.placeholder.com/150",
    description: "Dependable and maintenance-free battery.",
    brand_id: 2,
    type_id: 2,
  },
  {
    id: 15,
    name: "LithiumPlus 24V 180Ah",
    storage_amp: 180,
    voltage: 24,
    image: "https://via.placeholder.com/150",
    description: "Advanced lithium technology for extended cycle life.",
    brand_id: 3,
    type_id: 3,
  },
  {
    id: 16,
    name: "MarineVolt 36V 120Ah",
    storage_amp: 120,
    voltage: 36,
    image: "https://via.placeholder.com/150",
    description: "Designed for marine and fishing applications.",
    brand_id: 4,
    type_id: 4,
  },
  {
    id: 17,
    name: "SolarEdge 48V 300Ah",
    storage_amp: 300,
    voltage: 48,
    image: "https://via.placeholder.com/150",
    description: "Ideal for industrial-scale solar power backup.",
    brand_id: 1,
    type_id: 1,
  },
  {
    id: 18,
    name: "UltraSafe 12V 50Ah",
    storage_amp: 50,
    voltage: 12,
    image: "https://via.placeholder.com/150",
    description: "Compact and lightweight battery for small applications.",
    brand_id: 2,
    type_id: 2,
  },
  {
    id: 19,
    name: "VoltTech 24V 130Ah",
    storage_amp: 130,
    voltage: 24,
    image: "https://via.placeholder.com/150",
    description: "Efficient and long-lasting for industrial use.",
    brand_id: 3,
    type_id: 3,
  },
  {
    id: 20,
    name: "EcoMarine 36V 90Ah",
    storage_amp: 90,
    voltage: 36,
    image: "https://via.placeholder.com/150",
    description: "Eco-friendly marine battery with high durability.",
    brand_id: 4,
    type_id: 4,
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
