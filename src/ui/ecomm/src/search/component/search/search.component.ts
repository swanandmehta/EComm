import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public menuIcon: IconDefinition = faBars;
  public searchIcon: IconDefinition = faSearch
  public cartIcon: IconDefinition = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
