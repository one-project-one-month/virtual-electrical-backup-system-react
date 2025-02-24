export type Inverters = {
    id: number | null;
    inverterType: number;
    waveType: string;
    model: string;
    brandId: number;
    compatibleBattery: string;
    inverterVolt: number;
    inverterPrice: number;
    image: string | File;
    description: string;
    watt: number;
};

export type InverterType = {
    id: number;
    name: string;
    efficiency: number;
}