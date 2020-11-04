import { ProductImg } from '../ProductImg/product-img';
import { ProductSelector } from '../ProductSelector/product-selector';
import { ProductSocial } from '../ProductSocial/product-social';

export class Product {
    primaryImg: ProductImg[] = [];
    secondaryImg: ProductImg[] = [];
    name: string;
    id: number;
    desc: string;
    onSale?: boolean = false;
    discount?: number = 0.0;
    price: number;
    currency?: string = "$";
    options: ProductSelector[] = [];
    social: ProductSocial[] = [];
    quantity: number = 0;

    constructor(primaryImg: ProductImg[], name: string, id: number, desc: string, 
        price: number, options: ProductSelector[], social: ProductSocial[], quantity: number) {
        this.primaryImg = primaryImg;
        this.name = name;
        this.id = id;
        this.desc = desc;
        this.options = options;
        this.social = social;
        this.price = price;
        this.quantity = quantity;
    }
}
