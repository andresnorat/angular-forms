import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MyValidators } from '../../utils/validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  constructor
    (
      private formBuilder: FormBuilder,
    ) {
    this.buildForm();
  }

  formRegister!: FormGroup;

  ngOnInit() {

  }

  get email() {
    return this.formRegister.get('email');
  }


  get password() {
    return this.formRegister.get('password');
  }

  get confirmPassword() {
    return this.formRegister.get('confirmPassword');
  }

  get type() {
    return this.formRegister.get('type');
  }

  get companyName() {
    return this.formRegister.get('companyName');

  }

  buildForm() {
    this.formRegister = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email], []],
      password: ['', [Validators.required, MyValidators.validPassword]],
      confirmPassword: ['', [Validators.required]],
      type: ['company', [Validators.required]],
      companyName: ['', Validators.required]
    }, {
      validators: MyValidators.matchPasswords
    });

    this.type?.valueChanges.subscribe(value => {
      if (value === 'company') {
        this.companyName?.setValidators([Validators.required])
      } else {
        this.companyName?.setValidators(null)
      }
      this.companyName?.updateValueAndValidity();
    });
  }

  save() {
    console.log(this.formRegister.value);
  }
}
