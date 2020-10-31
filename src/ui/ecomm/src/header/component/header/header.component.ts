import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faSearch, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output("navToggleEvent")
  public navToggleEvent: EventEmitter<boolean>;

  public menuIcon: IconDefinition = faBars;
  public searchIcon: IconDefinition = faSearch;
  public cartIcon: IconDefinition = faShoppingCart;
  public toggleState: boolean = false;

  constructor() {
    this.navToggleEvent = new EventEmitter<boolean>(this.toggleState);
  }

  ngOnInit(): void {

  }

  public onNavToggle(): void {
    this.toggleState = !this.toggleState;
    this.navToggleEvent.emit(this.toggleState);
  }

}
