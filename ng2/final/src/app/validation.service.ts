import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  cannotBeSmallerThanFiveChars(control: FormControl){
    
    if(control.value && control.value.length < 5){
      return {cannotBeSmallerThanFiveChars: true}
    }

    return null;
  }

  isNotValidEmail(control: FormControl){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(control.value)){
      return {isNotValidEmail: true};
    }

    return null;
  }

}
