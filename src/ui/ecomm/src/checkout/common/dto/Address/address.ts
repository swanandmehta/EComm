export class Address {
    address: string
    landmark: string
    city: string
    country: string
    state: string
    zipcode: string

    constructor(address: string, landmark: string, city: string, country: string, state: string, zipcode: string) {
        this.address = address;
        this.landmark = landmark;
        this.city = city;
        this.country = country;
        this.state = state;
        this.zipcode = zipcode;
    }
}
