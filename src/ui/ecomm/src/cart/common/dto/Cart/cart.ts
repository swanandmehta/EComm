import { CartProduct } from '../CartProduct/cart-product';

export class Cart {
    cost: number;
    currency: string;
    products: CartProduct[];

    constructor(cost: number, currency: string, products: CartProduct[]){
        this.cost = cost;
        this.currency = currency;
        this.products = products;
    }
}
