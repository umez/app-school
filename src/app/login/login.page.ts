import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { InitformModel, Utils } from '../shared/services/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  utils = new Utils();
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const formsModel: InitformModel[] = [
      {
        formControlName: 'userName', formValidators: [Validators.required]
      },
      {
        formControlName: 'password', formValidators: [Validators.required]
      }
    ];

    this.loginForm = this.utils.initForm(formsModel);
  }

}
