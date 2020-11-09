import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainCategoryOption } from 'src/sidebar/common/dto/MainCategoryOption/main-category-option';
import { SocialOption } from 'src/sidebar/common/dto/SocialOption/social-option';
import { SubCategoryOption } from 'src/sidebar/common/dto/SubCategoryOption/sub-category-option';
import { SidebarConfig } from 'src/sidebar/common/interface/SidebarConfig/sidebar-config';
import { faInstagram, faFacebook, faYoutube, faRedditAlien, faTwitter, IconDefinition} from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.css']
})
export class SidebarContainerComponent implements OnInit {

  @Output("navCloseEvent")
  public navCloseEvent: EventEmitter<boolean>;

  public config: SidebarConfig;
  public closeIcon: IconDefinition = faTimes;
  private categoryList: Array<MainCategoryOption>;
  private extra: Array<SubCategoryOption>;
  private social: Array<SocialOption>;

  constructor() {    

    const subOption:SubCategoryOption[] = [];
    let sub1: SubCategoryOption = new SubCategoryOption("All", "All");
    let sub2: SubCategoryOption = new SubCategoryOption("Shirts", "Shirts");
    let sub3: SubCategoryOption = new SubCategoryOption("Pants", "Pants");
    let sub4: SubCategoryOption = new SubCategoryOption("Denim", "Denim");
    let sub5: SubCategoryOption = new SubCategoryOption("Jacket", "Jacket");
    let sub6: SubCategoryOption = new SubCategoryOption("Footwear", "Footwear");

    subOption.push(sub1);
    subOption.push(sub2);
    subOption.push(sub3);
    subOption.push(sub4);
    subOption.push(sub5);
    subOption.push(sub6);

    this.categoryList = [];
    let m1: MainCategoryOption = new MainCategoryOption("Feature", "Feature", true, subOption);
    let m2: MainCategoryOption = new MainCategoryOption("Women", "Women", true, subOption);
    let m3: MainCategoryOption = new MainCategoryOption("Men", "Men", true, subOption);
    let m4: MainCategoryOption = new MainCategoryOption("Provisions", "Provisions", true, subOption);
    let m5: MainCategoryOption = new MainCategoryOption("Sale", "Sale", true, subOption);
    let m6: MainCategoryOption = new MainCategoryOption("Lookbook", "Lookbook", true, subOption);

    this.categoryList.push(m1);
    this.categoryList.push(m2);
    this.categoryList.push(m3);
    this.categoryList.push(m4);
    this.categoryList.push(m5);
    this.categoryList.push(m6);

    this.extra = [];
    let e1: SubCategoryOption = new SubCategoryOption("login", "Login In");
    let e2: SubCategoryOption = new SubCategoryOption("Create Account", "Create Account");
    let e3: SubCategoryOption = new SubCategoryOption("Shipping & Return", "Shipping & Return");
    let e4: SubCategoryOption = new SubCategoryOption("Sizing Information", "Sizing Information");
    let e5: SubCategoryOption = new SubCategoryOption("Journal", "Journal");
    let e6: SubCategoryOption = new SubCategoryOption("Contact", "Contact");
    
    this.extra.push(e1);
    this.extra.push(e2);
    this.extra.push(e3);
    this.extra.push(e4);
    this.extra.push(e5);
    this.extra.push(e6);

    this.social = [];
    let s1: SocialOption = new SocialOption("Facebook", faFacebook);
    let s2: SocialOption = new SocialOption("Instagram", faInstagram);
    let s3: SocialOption = new SocialOption("Youtube", faYoutube);
    let s4: SocialOption = new SocialOption("Reddit", faRedditAlien);
    let s5: SocialOption = new SocialOption("Twitter", faTwitter);

    this.social.push(s1);
    this.social.push(s2);
    this.social.push(s3);
    this.social.push(s4);
    this.social.push(s5);

    this.config = {
      category: this.categoryList,
      extra: this.extra,
      social: this.social,
      showCategoryOption: true,
      showCloseIcon: true,
      showExtraOption: true,
      showSocialOption: true,
    }

    this.navCloseEvent = new EventEmitter<boolean>(false);
  }

  ngOnInit(): void {
  }

  public close(): void {
    this.navCloseEvent.emit(true);
  }

}
