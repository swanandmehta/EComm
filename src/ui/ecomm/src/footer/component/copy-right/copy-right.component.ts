import { Component, OnInit } from '@angular/core';
import { IconDefinition, faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css']
})
export class CopyRightComponent implements OnInit {

  public date: Date = new Date();
  public copyRightIcon: IconDefinition = faCopyright;

  constructor() { }

  ngOnInit(): void {
  }

}
