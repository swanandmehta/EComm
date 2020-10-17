import { Component, Input, OnInit } from '@angular/core';
import { BannerTextPosition } from 'src/banner/common/enum/BannerTextPosition/banner-text-position.enum';

@Component({
  selector: 'app-sider-placeholder',
  templateUrl: './sider-placeholder.component.html',
  styleUrls: ['./sider-placeholder.component.css']
})
export class SiderPlaceholderComponent implements OnInit {

  @Input("btnText")
  public buttonText: string = null;

  @Input("btnSrc")
  public buttonSrc: string = null;

  @Input("headerText")
  public headerText: string = null;

  @Input("position")
  public location: BannerTextPosition = BannerTextPosition.CENTER;

  constructor() { }

  ngOnInit(): void {
  }

}
