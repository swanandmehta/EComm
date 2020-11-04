import { ProductStatus } from '../../enum/product-status.enum';

export class Product {
    id: number = 0;
    name: string;
    onSale?: boolean = false;
    discount?: number = 0.0;
    price: number;
    currency?: string = "$";
    imgList: Array<string>;
    status: ProductStatus = ProductStatus.AVALIABLE;

    constructor(name: string, price: number, imgList: Array<string>) {
        this.name = name;
        this.price = price;
        this.imgList = imgList; 
    }
}
