import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-checkout-information',
  templateUrl: './checkout-information.component.html',
  styleUrls: ['./checkout-information.component.css']
})
export class CheckoutInformationComponent implements OnInit {

  public contactForm: FormGroup;
  public personalForm: FormGroup;
  public addressForm: FormGroup;
  public countryList: Observable<string[]>;
  public stateList: Observable<string[]>;
  public zipcodeList: Observable<string[]>;

  private values: Array<string> = ['A', 'AA', 'ABA', 'ABC', 'CAB'];

  constructor(private formBuilder: FormBuilder, private router: Router, private activeRoute: ActivatedRoute) {
    this.personalForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      email: [],
      phone: []
    });

    this.addressForm = this.formBuilder.group({
      address: [],
      landmark: [],
      city: [],
      country: [],
      state: [],
      zipcode: []
    });

    this.contactForm = this.formBuilder.group({
      newsletter: [true],
      saveAddress: [true],
      personal: this.personalForm,
      address: this.addressForm
    });

    this.countryList = this.addressForm.controls.country.valueChanges.pipe(
      map(value => this.filter(value, this.values))
    )

    this.stateList = this.addressForm.controls.state.valueChanges.pipe(
      map(value => this.filter(value, this.values))
    )

    this.zipcodeList = this.addressForm.controls.zipcode.valueChanges.pipe(
      map(value => this.filter(value, this.values))
    )
  }

  ngOnInit(): void {
  }

  private filter(value: string, options: Array<string>): string[] {
    return options.filter((s) => new RegExp(value, 'gi').test(s));
  }

  public navigateToHome(): void {
    this.router.navigate(["home"]);
  }

  public navigateToShipping(): void {
    this.router.navigate(["../shipping"], {relativeTo: this.activeRoute});
  }

}
