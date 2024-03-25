import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { userNameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone:true
})

// AbstractControl is a base class for FormControl and FormGroup
export class SignupFormComponent {
  form  = new FormGroup({
    account : new FormGroup({
      username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      userNameValidators.userNameWithSpace,
    ],userNameValidators.shouldBeUnique),  
    password : new FormControl('', Validators.required),})
    
  });

  get username(){
    return this.form.get('account.username');
  }
}
