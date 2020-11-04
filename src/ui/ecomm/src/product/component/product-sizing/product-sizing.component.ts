import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/product/common/dto/Product/product';
import { Selector } from 'src/product/common/interface/selector';
import { startWith, map } from 'rxjs/operators'
import { ProductSelector } from 'src/product/common/dto/ProductSelector/product-selector';

@Component({
  selector: 'app-product-sizing',
  templateUrl: './product-sizing.component.html',
  styleUrls: ['./product-sizing.component.css']
})
export class ProductSizingComponent implements OnInit {

  @Input("product")
  public product: Product;
  public form: FormGroup;
  public options: Selector = {};

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});

  }

  ngOnInit(): void {
    for (const selector of this.product.options) {
      const control: FormControl = new FormControl('', []);
      this.form.addControl(selector.name, control);
      this.options[selector.name] = control.valueChanges.pipe(
        startWith(''),
        map(value => this.filter(value, selector))
      );
    }
  }

  private filter(value: string, selector: ProductSelector) {
    return selector.options.filter((s) => new RegExp(value, 'gi').test(s.display));
  }

}
