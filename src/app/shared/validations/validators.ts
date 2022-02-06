import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // eslint-disable-next-line max-len
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = control.value;
    if (!value) {
      return null;
    }
    return emailReg.test(value) ? { invalidEmail: true } : null;
  };
}
