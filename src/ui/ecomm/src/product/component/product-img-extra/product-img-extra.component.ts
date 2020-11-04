import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/product/common/dto/Product/product';

@Component({
  selector: 'app-product-img-extra',
  templateUrl: './product-img-extra.component.html',
  styleUrls: ['./product-img-extra.component.css']
})
export class ProductImgExtraComponent implements OnInit {

  @Input("product")
  public product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
