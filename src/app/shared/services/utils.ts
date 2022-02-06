import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';

export class Utils {

  initForm(obj: InitformModel[]): FormGroup {
    const formGroup = new FormGroup({});
    obj.forEach(item => {
      this.addControl(formGroup, item);
    });
    return formGroup;
  }

  addControl(formGroup: FormGroup, obj: InitformModel): void {
    formGroup.addControl(obj.formControlName, new FormControl(
      { value: obj.formValue ?? null, disabled: obj.formDisabled ?? false }, obj.formValidators as unknown ?? null)
    );
  }

  removeControl(formGroup: FormGroup, formControlName: string): void {
    formGroup.removeControl(formControlName);
  }

  onlyNumber(evt: KeyboardEvent): boolean {
    const validkeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (validkeys.indexOf(evt.key) < 0) {
      return false;
    } else {
      return true;
    }
  }
}


export interface InitformModel {
  formControlName: string;
  formValue?: string;
  formValidators?: unknown;
  formDisabled?: boolean;
}
