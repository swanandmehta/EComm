import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/showcase/common/dto/Product/product';
import { IconDefinition, faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input("product")
  public product: Product;
  public img: string;
  public nextIcon: IconDefinition = faGreaterThan;
  public previousIcon: IconDefinition = faLessThan;

  private index: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.img = this.product.imgList[this.index];
  }

  public previous(): void {
    this.moveImage(this.index - 1)
  }

  public next(): void {
    this.moveImage(this.index + 1)
  }

  private moveImage(index: number): void {
    if (index < 0) {
      index = this.product.imgList.length - 1;
    }

    if (index >= this.product.imgList.length) {
      index = 0;
    }

    this.img = this.product.imgList[index];
    this.index = index;

  }

  public navigate(): void {
    this.router.navigateByUrl("product/"+this.product.id);
  }

}
