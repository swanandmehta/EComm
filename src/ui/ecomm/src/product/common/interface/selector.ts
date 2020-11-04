import { Observable } from 'rxjs';
import { ProductSelectorOption } from '../dto/ProductSelectorOption/product-selector-option';

export interface Selector {
    [key: string]: Observable<ProductSelectorOption[]>;
}
