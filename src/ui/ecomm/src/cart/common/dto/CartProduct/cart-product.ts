import { CartImg } from '../CartImg/cart-img';

export class CartProduct {
    name: string;
    id: number;
    selector: string;
    quantity: number;
    price: number;
    img: CartImg;
    currency: string = "$";

    constructor(name: string, id: number, selector: string, quantity: number, price: number, img: CartImg, currency: string){
        this.name = name;
        this.id = id;
        this.selector = selector;
        this.quantity = quantity;
        this.price = price;
        this.img = img;
        this.currency = currency;
    }
}
