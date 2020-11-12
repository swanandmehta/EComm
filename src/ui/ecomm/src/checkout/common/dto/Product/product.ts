import { ProductImg } from '../ProductImg/product-img';

export class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    discount: number;
    currency: string;
    selector: string;
    img: ProductImg;

    constructor(id: number, name: string, quantity: number, price: number, discount: number, currency: string, selector: string, productImg: ProductImg){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount;
        this.currency = currency;
        this.selector = selector;
        this.img = productImg;
    }
}
