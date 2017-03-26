import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Checkpassword } from '../checkpassword';
import 'rxjs/add/operator/debouncetime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(fb: FormBuilder) {
      this.signUpForm = fb.group({
          oldpassword: ['', Validators.compose([
            Validators.required,
            Checkpassword.checkPasswordLength
          ])],
          passwords: fb.group({
            newpassword1: ['', Validators.required],
            newpassword2: ['', Validators.required]
          },{validator: Checkpassword.isSamePassword})    
      });

      let search = this.signUpForm.controls['oldpassword'];
      search.valueChanges.debounceTime(400)
                          .map(str => (<string>str).replace(' ','-'))
                          .subscribe(x => console.log(x));

  }

  ngOnInit() {
  }

  onSubmit(){
    console.dir(this.signUpForm.controls);
  }

}
