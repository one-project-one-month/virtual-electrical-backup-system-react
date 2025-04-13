import { Brands } from "./brand";
export type Inverters = {
    _id: string | null;
    inverterType: string;
    waveType: string;
    model: string;
    brandId:  Brands | string ;
    compatibleBattery: string;
    inverterVolt: number;
    inverterPrice: number;
    image: string | File | null;
    description: string;
    watt: number;
};
