import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faSearch, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output("navToggleEvent")
  public navToggleEvent: EventEmitter<boolean>;

  @Output("viewCartEvent")
  public viewCartEvent: EventEmitter<boolean>;

  public menuIcon: IconDefinition = faBars;
  public searchIcon: IconDefinition = faSearch;
  public cartIcon: IconDefinition = faShoppingCart;

  constructor(private router: Router) {
    this.navToggleEvent = new EventEmitter<boolean>(false);
    this.viewCartEvent = new EventEmitter<boolean>(false);
  }

  ngOnInit(): void {

  }

  public onNavToggle(): void {
    this.navToggleEvent.emit(false);
  }

  public onCartToggle(): void {
    this.viewCartEvent.emit(false);
  }

  public onLogoClick(): void {
    this.router.navigateByUrl("/home");
  }

}
