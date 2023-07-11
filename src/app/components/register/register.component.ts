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

  get name() {
    return this.formRegister.get('name');
  }

   buildForm(){
    this.formRegister = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required], []],
      email: ['', [Validators.required],[]],
      image: ['', [Validators.required], []],
      password: ['', [Validators.required],[]],
      confirmPassword:['', [Validators.required]]
    },
      {
        validators: MyValidators.matchPasswords
      }
    );
  }


  save(){
    console.log(this.formRegister.value);
  }

}
