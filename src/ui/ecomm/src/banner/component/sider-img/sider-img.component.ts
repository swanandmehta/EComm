import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sider-img',
  templateUrl: './sider-img.component.html',
  styleUrls: ['./sider-img.component.css']
})
export class SiderImgComponent implements OnInit {

  @Input("src")
  public imgPath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
