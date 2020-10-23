import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Product } from 'src/showcase/common/dto/Product/product';
import { ShowcaseConfig } from 'src/showcase/common/dto/ShowcaseConfig/showcase-config';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  @Input("config")
  public configuration: ShowcaseConfig;

  public productList: Array<Product>;

  constructor() { }

  ngOnInit(): void {
    this.productList = [];
    let productImg: Array<string> = [];

    productImg.push("../../../../assets/img/product1.jpg");
    productImg.push("../../../../assets/img/product2.jpg");
    productImg.push("../../../../assets/img/product3.jpg");
    let product1: Product = new Product("Clasic Dress", 250, productImg);

    productImg = []
    productImg.push("../../../../assets/img/product4.jpg");
    productImg.push("../../../../assets/img/product5.jpg");
    productImg.push("../../../../assets/img/product6.jpg");
    let product2: Product = new Product("Clasic Dress", 350, productImg);
    product2.onSale = true;
    product2.discount = 25;

    productImg = []
    productImg.push("../../../../assets/img/product7.jpg");
    productImg.push("../../../../assets/img/product8.jpg");
    productImg.push("../../../../assets/img/product9.jpg");
    let product3: Product = new Product("Clasic Dress", 450, productImg);

    productImg = []
    productImg.push("../../../../assets/img/product10.jpg");
    productImg.push("../../../../assets/img/product11.jpg");
    productImg.push("../../../../assets/img/product12.jpg");
    let product4: Product = new Product("Clasic Dress", 550, productImg);

    productImg = []
    productImg.push("../../../../assets/img/product13.jpg");
    productImg.push("../../../../assets/img/product14.jpg");
    productImg.push("../../../../assets/img/product15.jpg");
    let product5: Product = new Product("Clasic Dress", 650, productImg);
    product5.onSale = true;
    product5.discount = 50;


    this.productList.push(product1);
    this.productList.push(product3);
    this.productList.push(product4);
    this.productList.push(product5);
  }

}
