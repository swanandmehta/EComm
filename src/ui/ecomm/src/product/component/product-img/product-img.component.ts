import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product/common/dto/Product/product';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent implements OnInit {

  @Input("product")
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
