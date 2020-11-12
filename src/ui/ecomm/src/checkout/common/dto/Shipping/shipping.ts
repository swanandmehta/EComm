export class Shipping {
    id: number
    name: string
    price: string
    currency: string

    constructor(id: number, name: string, price: string, currency: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.currency = currency;
    }
}
