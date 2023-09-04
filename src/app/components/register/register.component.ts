import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms'
import { MyValidators } from '../../utils/validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements  OnInit {

  hide = true;

  constructor
  (
    private formBuilder: FormBuilder,
  ){
    this.buildForm();
  }

  formRegister!: FormGroup;

  ngOnInit(){
    
  }

  get email() {
    return this.formRegister.get('email');
  }

  
  get password() {
    return this.formRegister.get('password');
  }

  get confirmPassword(){
    return this.formRegister.get('confirmPassword');

  }

   buildForm(){
    this.formRegister = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email],[]],
      password: ['', [Validators.required, MyValidators.validPassword]],
      confirmPassword:['', [Validators.required]]
    },{
      validators: MyValidators.matchPasswords
    });
  }


  save(){
    console.log(this.formRegister.value);
  }
}
