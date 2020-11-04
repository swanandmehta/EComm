import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MainCategoryOption } from 'src/sidebar/common/dto/MainCategoryOption/main-category-option';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-main-option',
  templateUrl: './sidebar-main-option.component.html',
  styleUrls: ['./sidebar-main-option.component.css']
})
export class SidebarMainOptionComponent implements OnInit {

  @Input("option")
  public option: MainCategoryOption;
  public icon: IconDefinition = faPlus;
  public isOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.evaulateIcon();
  }

  private evaulateIcon(): void {
    if (this.isOpen == true) {
      this.icon = faMinus;
    } else {
      this.icon = faPlus;
    }
  }

  public showOption(): void {
    this.isOpen = !this.isOpen;
    this.evaulateIcon();
  }

  public openCategory(showcase: string, tag: string): void {
    this.router.navigateByUrl("showcase/"+showcase+"/tag/"+tag);
  }

  public openShowcase(showcase: string): void {
    this.router.navigateByUrl("showcase/"+showcase);
  }


}
