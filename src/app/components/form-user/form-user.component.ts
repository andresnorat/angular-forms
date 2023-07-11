import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  userForm!: FormGroup;
  showForm = false;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService
  ) {
    this.builForm();
  }



  getUser(id: number) {
      this.userService.getUser(id)
      .subscribe({
        next: (user) => {
          console.log(user);
          console.log(this.userForm.value);
          this.userForm.patchValue({
            email: user.email,
            password: user.password,
            name: user.name,
            role: user.role,
            avatar: user.avatar
          });
          this.showForm = true;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }


  save(){

  }
  
  
  builForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required,],
      avatar: ['', Validators.required,]
    });
  }
}
