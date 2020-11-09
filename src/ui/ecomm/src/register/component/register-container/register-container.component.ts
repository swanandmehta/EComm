import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.css']
})
export class RegisterContainerComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      password: []
    });
  }

  ngOnInit(): void {

  }

  public onReturn(): void {
    this.router.navigateByUrl("/home");
  }

}
