import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faLessThan, faGreaterThan, faDotCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import { BannerConfig } from 'src/banner/common/dto/BannerConfig/banner-config';

@Component({
  selector: 'app-sider-nav',
  templateUrl: './sider-nav.component.html',
  styleUrls: ['./sider-nav.component.css']
})
export class SiderNavComponent implements OnInit {

  @Input("showNav")
  public isNavEnabled: boolean = true;

  @Input("img")
  public imgConfigList: Array<BannerConfig> = [];

  @Input("index")
  public currentImgIndex: number = 0;

  @Output("onNavAction")
  public navPerformed: EventEmitter<number> = new EventEmitter<number>();

  public previousIcon: IconDefinition = faLessThan;
  public nextIcon: IconDefinition = faGreaterThan;
  public locationIcon: IconDefinition = faDotCircle;
  public currentLocationIcon: IconDefinition = faCircle;


  constructor() { }

  ngOnInit(): void {

  }

  moveToBanner(index: number): void {
    this.navPerformed.emit(index);
    this.currentImgIndex = index;
  }

  next(): void {
    this.moveToBanner(this.currentImgIndex + 1);
  }

  previous(): void {
    this.moveToBanner(this.currentImgIndex - 1);
  }

}
