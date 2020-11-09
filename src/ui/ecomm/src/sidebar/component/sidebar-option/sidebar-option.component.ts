import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategoryOption } from 'src/sidebar/common/dto/SubCategoryOption/sub-category-option';

@Component({
  selector: 'app-sidebar-option',
  templateUrl: './sidebar-option.component.html',
  styleUrls: ['./sidebar-option.component.css']
})
export class SidebarOptionComponent implements OnInit {

  @Input("option")
  public option: SubCategoryOption;

  @Output("onNavClose")
  public onNavClose: EventEmitter<boolean>;

  constructor(private router: Router) {
    this.onNavClose = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    
  }

  public onOptionClick(link: string): void {
    this.router.navigateByUrl(link);
    this.onNavClose.emit(false);
  }

}
