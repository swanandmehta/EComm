import { Component, OnInit } from '@angular/core';
import { NewsletterConfig } from 'src/introduction/common/dto/NewsletterConfig/newsletter-config';
import { StoreAddressConfig } from 'src/introduction/common/dto/StoreAddressConfig/store-address-config';
import { StoreInfoConfig } from 'src/introduction/common/dto/StoreInfoConfig/store-info-config';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  public storeInfoConfig: StoreInfoConfig;
  public newsletterConfig: NewsletterConfig;

  constructor() {
    let header: string = "Re+Co. is a showcase of the Boundless theme by Shopify";
    let text: string = "Product photography has been provided by Baby & Company, a curated collection of apparel and accessory designs from around the world.";
    let img: string = "../../../assets/img/storefront.jpg";
    let address: string = "2321 Queen St. W. Toronto, Canada.";
    let timing: string = "Everyday, 9am – 9pm";
    let newsletterHeader: string = "Subscribe to our newsletter";
    let newsletterText: string = "A short sentence describing what someone will receive by subscribing";

    let addressConfig: StoreAddressConfig = new StoreAddressConfig(address, timing);
    this.storeInfoConfig = new StoreInfoConfig(header, text, img, addressConfig);
    
    this.newsletterConfig = new NewsletterConfig(newsletterHeader, newsletterText);

  }

  ngOnInit(): void {
  }

}
