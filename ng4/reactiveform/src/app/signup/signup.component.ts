import { UsernameValidator } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      UsernameValidator.cannotContainSpace,
    ], UsernameValidator.shouldBeUnique),
    email: new FormControl('', Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get email(){
    return this.form.get('email');
  }

  constructor() { }

  ngOnInit() {
  }

}
