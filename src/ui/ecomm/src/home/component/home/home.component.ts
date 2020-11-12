import { Component, OnInit } from '@angular/core';
import { ShowcaseConfig } from 'src/showcase/common/dto/ShowcaseConfig/showcase-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featured: ShowcaseConfig;

  constructor() {
    this.featured = new ShowcaseConfig("Featured", 4);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
