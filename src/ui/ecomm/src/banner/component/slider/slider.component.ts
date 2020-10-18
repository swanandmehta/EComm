import { Component, Input, OnInit } from '@angular/core';
import { BannerConfig } from 'src/banner/common/dto/BannerConfig/banner-config';
import { BannerTextPosition } from 'src/banner/common/enum/BannerTextPosition/banner-text-position.enum';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input("img")
  public imgConfigList: Array<BannerConfig>;

  public src: string = null;
  public btnText: string = null;
  public btnSrc: string = null;
  public headerText: string = null;
  public position: BannerTextPosition = null;
  public showNav: boolean = false;
  public index: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.index++;
    this.changeBanner();
    this.startSlideShow();
  }

  private startSlideShow(): void {

    setInterval(() => {
      this.index++;
      this.changeBanner();
    }, 5000);
  }

  public onBannerChanged(index: number) {
    this.index = index;
    this.changeBanner();
  }

  private changeBanner(): void {
    if (this.imgConfigList.length == 0) {
      return;
    }

    if (this.index >= this.imgConfigList.length) {
      this.index = 0;
    }

    if(this.index < 0){
      this.index = this.imgConfigList.length - 1;
    }

    this.src = this.imgConfigList[this.index].src;
    this.btnText = this.imgConfigList[this.index].btnText;
    this.btnSrc = this.imgConfigList[this.index].btnSrc;
    this.headerText = this.imgConfigList[this.index].headerText;
    this.position = this.imgConfigList[this.index].position;
    this.showNav = this.imgConfigList[this.index].showNav;
  }

}
