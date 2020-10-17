import { Component, OnInit } from '@angular/core';
import { BannerConfig } from 'src/banner/common/dto/BannerConfig/banner-config';
import { BannerTextPosition } from 'src/banner/common/enum/BannerTextPosition/banner-text-position.enum';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public sliderImgList: Array<BannerConfig>;

  constructor() {
    this.sliderImgList = [];
    let c1 = new BannerConfig("../../../assets/img/banner1.jpg", true, true);
    c1.btnSrc = "https://www.google.com";
    c1.btnText = "www.google.com";
    c1.headerText = "This button will take you to google";
    c1.position = BannerTextPosition.CENTER;

    let c2 = new BannerConfig("../../../assets/img/banner2.jpg", true, true);
    c2.btnSrc = "https://www.google.com";
    c2.btnText = "www.google.com";
    c2.headerText = "This button will take you to google";
    c2.position = BannerTextPosition.LEFT;

    let c3 = new BannerConfig("../../../assets/img/banner3.jpg", true, true);
    c3.btnSrc = "https://www.google.com";
    c3.btnText = "www.google.com";
    c3.headerText = "This button will take you to google";
    c3.position = BannerTextPosition.RIGHT;

    let c4 = new BannerConfig("../../../assets/img/banner4.jpg", true, true);
    c4.btnSrc = "https://www.google.com";
    c4.btnText = "www.google.com";
    c4.headerText = "This button will take you to google";
    c4.position = BannerTextPosition.LEFT;

    let c5 = new BannerConfig("../../../assets/img/banner5.jpeg", true, true);
    c5.btnSrc = "https://www.google.com";
    c5.btnText = "www.google.com";
    c5.headerText = "This button will take you to google";
    c5.position = BannerTextPosition.RIGHT;

    let c6 = new BannerConfig("../../../assets/img/banner6.jpeg", true, true);
    c6.btnSrc = "https://www.google.com";
    c6.btnText = "www.google.com";
    c6.headerText = "This button will take you to google";
    c6.position = BannerTextPosition.LEFT;

    this.sliderImgList.push(c1);
    this.sliderImgList.push(c2);
    this.sliderImgList.push(c3);
    this.sliderImgList.push(c4);
    this.sliderImgList.push(c5);
    this.sliderImgList.push(c6);
  }

  ngOnInit(): void {

  }

}

