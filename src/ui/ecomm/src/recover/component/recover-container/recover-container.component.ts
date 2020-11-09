import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-container',
  templateUrl: './recover-container.component.html',
  styleUrls: ['./recover-container.component.css']
})
export class RecoverContainerComponent implements OnInit {

  public recoverForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.recoverForm = this.formBuilder.group({
      email: []
    })
  }

  ngOnInit(): void {
  }

  public onReturn(): void {
    this.router.navigateByUrl("/home");
  }

  public onCreate(): void {
    this.router.navigateByUrl("/create-account");
  }

}
