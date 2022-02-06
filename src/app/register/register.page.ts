import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InitformModel } from 'ui';
import { Utils } from '../shared/services/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  utils = new Utils();

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const formsModel: InitformModel[] = [
      {
        formControlName: 'firstName', formValidators: [Validators.required]
      },
      {
        formControlName: 'lastName', formValidators: [Validators.required]
      },
      {
        formControlName: 'email', formValidators: [Validators.required]
      },
      {
        formControlName: 'password', formValidators: [Validators.required]
      },
      {
        formControlName: 'rePassword', formValidators: [Validators.required]
      },
      {
        formControlName: 'phone', formValidators: [Validators.required]
      }
    ];

    this.registerForm = this.utils.initForm(formsModel);
  }

  register(): void {
    console.log(this.registerForm);
  }

}
