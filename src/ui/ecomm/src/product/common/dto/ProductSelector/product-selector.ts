import { ProductSelectorOption } from '../ProductSelectorOption/product-selector-option';

export class ProductSelector {
    name: string;
    selected: string;
    options: ProductSelectorOption[] = [];

    constructor(name: string, selected: string, options: ProductSelectorOption[]){
        this.name = name;
        this.selected = selected;
        this.options = options;
    }
}
