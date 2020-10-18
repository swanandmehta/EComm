import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/menu/common/dto/Menu/menu';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {

  public menuList: Array<Menu>;
  public selected: Menu;

  constructor() {
    this.menuList = [];
    let m1: Menu = new Menu("Feature");
    let m2: Menu = new Menu("Women");
    let m3: Menu = new Menu("Men");
    let m4: Menu = new Menu("Provisions");
    let m5: Menu = new Menu("Sale");
    let m6: Menu = new Menu("Lookbook");

    this.menuList.push(m1);
    this.menuList.push(m2);
    this.menuList.push(m3);
    this.menuList.push(m4);
    this.menuList.push(m5);
    this.menuList.push(m6);

    this.selected = m1;
  }

  ngOnInit(): void {
  }

}
