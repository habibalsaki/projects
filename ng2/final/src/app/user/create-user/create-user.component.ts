import { ValidationService } from './../../validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private vldService: ValidationService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
        basic: this.formBuilder.group({
            name: ['', Validators.compose([
              Validators.required,
              this.vldService.cannotBeSmallerThanFiveChars
            ])],
            phone: [],
            email: ['', Validators.compose([
              Validators.required,
              this.vldService.isNotValidEmail
            ])]
        }),
        address: this.formBuilder.group({
            street: [],
            suite: [],
            city: [],
            zipcode: []
        })
    });
  }

  submitForm(ev){
    
  }

}
