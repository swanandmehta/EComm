import { Component, Input, OnInit } from '@angular/core';
import { SubCategoryOption } from 'src/sidebar/common/dto/SubCategoryOption/sub-category-option';

@Component({
  selector: 'app-sidebar-option',
  templateUrl: './sidebar-option.component.html',
  styleUrls: ['./sidebar-option.component.css']
})
export class SidebarOptionComponent implements OnInit {

  @Input("option")
  public option: SubCategoryOption;

  constructor() { }

  ngOnInit(): void {
    
  }

}
