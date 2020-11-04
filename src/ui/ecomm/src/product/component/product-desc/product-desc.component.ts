import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product/common/dto/Product/product';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.css']
})
export class ProductDescComponent implements OnInit {

  @Input("product")
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
