import { UserService } from './../user.service';
import { HasUnsavedData} from './../../guards/hasUnsavedData.service';
import { ValidationService } from './../../validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  
  userForm: FormGroup;
  title: string;
  user = new User();

  constructor(private formBuilder: FormBuilder, private vldService: ValidationService, 
    private userService: UserService, private router: Router, private route: ActivatedRoute) { 
        
    }

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
    
    this.route.params.subscribe(params => {
        var id = +params["id"];

        this.title = id ? "Edit User" : "Create User";

        if(!id) return;

        this.userService.getSingleUser(id).subscribe(
          user => this.user = user,
          response => {
            if(response.status === 404){
              this.router.navigate(['NotFound']);
            }
          }
        );
    })
    
  }

  submitForm(ev){
    
    let data = {
      name: ev.value.basic.name,
      email: ev.value.basic.email,
      phone: ev.value.basic.phone,
      address: ev.value.address
    }
    let result;
    // console.log(data);
    if(this.user.id){
      result = this.userService.editUser(data, this.user.id);
    }
    else
      result = this.userService.createUser(data);

    result.subscribe(response => {
      this.router.navigate(['/user']);
    });
    
  }

}
