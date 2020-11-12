import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product/common/dto/Product/product';
import { ProductImg } from 'src/product/common/dto/ProductImg/product-img';
import { ProductSelector } from 'src/product/common/dto/ProductSelector/product-selector';
import { ProductSelectorOption } from 'src/product/common/dto/ProductSelectorOption/product-selector-option';
import { ProductSocial } from 'src/product/common/dto/ProductSocial/product-social';
import { SocialType } from 'src/product/common/enum/social-type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor() {
    const pImg1: ProductImg = new ProductImg("../../../assets/img/product1.jpg");
    const pImg2: ProductImg = new ProductImg("../../../assets/img/product2.jpg");
    const pImg3: ProductImg = new ProductImg("../../../assets/img/product3.jpg");
    const pImg4: ProductImg = new ProductImg("../../../assets/img/product4.jpg");
    const pImg5: ProductImg = new ProductImg("../../../assets/img/product6.jpg");
    const pImg6: ProductImg = new ProductImg("../../../assets/img/product7.jpg");

    const primaryImg: ProductImg[] = [pImg1, pImg2];
    const secondaryImg: ProductImg[] = [pImg3, pImg4, pImg5, pImg6];

    const sOp1: ProductSelectorOption = new ProductSelectorOption("25", "25");
    const sOp2: ProductSelectorOption = new ProductSelectorOption("26", "26");
    const sOp3: ProductSelectorOption = new ProductSelectorOption("27", "27");
    const sOp4: ProductSelectorOption = new ProductSelectorOption("28", "28");
    const sizeSelector: ProductSelector = new ProductSelector("Size", "25", [sOp1, sOp2, sOp3, sOp4]);

    const cOp1: ProductSelectorOption = new ProductSelectorOption("Black", "Black");
    const cOp2: ProductSelectorOption = new ProductSelectorOption("Blue", "Blue");
    const cOp3: ProductSelectorOption = new ProductSelectorOption("Green", "Green");
    const cOp4: ProductSelectorOption = new ProductSelectorOption("Red", "Red");
    const colorSelector: ProductSelector = new ProductSelector("Color", "Black", [cOp1, cOp2, cOp3, cOp4]);

    const lOp1: ProductSelectorOption = new ProductSelectorOption("USA", "USA");
    const lOp2: ProductSelectorOption = new ProductSelectorOption("UK", "UK");
    const lOp3: ProductSelectorOption = new ProductSelectorOption("Canada", "Canada");
    const lOp4: ProductSelectorOption = new ProductSelectorOption("Germany", "Germany");
    const locationSelector: ProductSelector = new ProductSelector("Location", "USA", [lOp1, lOp2, lOp3, lOp4]);

    const productSelectors: ProductSelector[] = [colorSelector, sizeSelector, locationSelector];

    const productDesc: string = "This is a demonstration store.\n\nYou can purchase products like this from Baby & Company.\n\nThe sleeveless Ruffle Top inspires. Classic without too many frills. V-neckline framed in ruffles. Pip-Squeak Chapeau. Color Cream. 100% Silk. Made in U.S.A. Ashley is wearing a Small.";

    const social1: ProductSocial = new ProductSocial(SocialType.FB, "");
    const social2: ProductSocial = new ProductSocial(SocialType.INSTAGRAM, "");
    const social3: ProductSocial = new ProductSocial(SocialType.REDDIT, "");
    const social4: ProductSocial = new ProductSocial(SocialType.TWITTER, "");
    const social5: ProductSocial = new ProductSocial(SocialType.YOUTUBE, "");

    const socials: ProductSocial[] = [social1, social2, social3, social4, social5];

    this.product = new Product(primaryImg, "Awesome Watch", 0, productDesc, 300, productSelectors, socials, 10);
    this.product.secondaryImg = secondaryImg;
    this.product.discount = 30;
    this.product.onSale = true;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
