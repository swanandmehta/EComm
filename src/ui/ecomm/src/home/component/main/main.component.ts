import { Component, OnInit } from '@angular/core';
import { ShowcaseConfig } from 'src/showcase/common/dto/ShowcaseConfig/showcase-config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public featured: ShowcaseConfig;

  constructor() {
    this.featured = new ShowcaseConfig("Featured", 4);
  }

  ngOnInit(): void {
  }

}
