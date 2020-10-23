import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuIcon: IconDefinition = faBars;
  public searchIcon: IconDefinition = faSearch;
  public cartIcon: IconDefinition = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
