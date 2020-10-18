import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/menu/common/dto/Menu/menu';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
export class MenuOptionComponent implements OnInit {

  @Input("menu")
  public menu: Menu = null;

  @Input("selected")
  public selected: Menu = null

  constructor() { }

  ngOnInit(): void {
  }

}
