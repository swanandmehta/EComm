import { Component, Input, OnInit } from '@angular/core';
import { StoreInfoConfig } from 'src/introduction/common/dto/StoreInfoConfig/store-info-config';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.css']
})
export class StoreInfoComponent implements OnInit {

  @Input("configuration")
  public config : StoreInfoConfig

  constructor() { }

  ngOnInit(): void {
    
  }

}
