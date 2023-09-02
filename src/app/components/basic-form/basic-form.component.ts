import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void { }


  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get nameField() {
    return this.form.get('fullName.name');
  }


  get lastField() {
    return this.form.get('fullName.last');
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required]],
        last: ['', [Validators.required]],
      }), 
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      color: ['', []],
      date: ['', []],
      age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
      url: ['', []],
      category: ['', []],
      tag: ['', []],
      agree: ['', [Validators.requiredTrue]],
      gender: ['', []],
      zone: ['', []],
    })
  }
}
