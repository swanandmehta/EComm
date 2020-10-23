import { StoreAddressConfig } from '../StoreAddressConfig/store-address-config';

export class StoreInfoConfig {
    header: string;
    text: string;
    img: string;
    address: StoreAddressConfig;

    constructor(header: string, text: string, img: string, address: StoreAddressConfig){
        this.header = header;
        this.text = text;
        this.img = img;
        this.address = address
    }
}
