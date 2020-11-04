import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product/common/dto/Product/product';

@Component({
  selector: 'app-product-purcharse-option',
  templateUrl: './product-purcharse-option.component.html',
  styleUrls: ['./product-purcharse-option.component.css']
})
export class ProductPurcharseOptionComponent implements OnInit {

  @Input("product")
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
