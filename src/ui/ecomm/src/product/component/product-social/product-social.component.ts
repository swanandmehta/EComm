import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faInstagram, faFacebook, faYoutube, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Product } from 'src/product/common/dto/Product/product';

@Component({
  selector: 'app-product-social',
  templateUrl: './product-social.component.html',
  styleUrls: ['./product-social.component.css']
})
export class ProductSocialComponent implements OnInit {

  @Input("product")
  public product: Product;

  public facebookIcon: IconDefinition = faFacebook;
  public instagramIcon: IconDefinition = faInstagram;
  public youtubeIcon: IconDefinition = faYoutube;
  public reditIcon: IconDefinition = faRedditAlien;
  public twitterIcon: IconDefinition = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
