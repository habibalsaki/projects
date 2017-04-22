import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

@Injectable()
export class UserService {

  url: string;
  
  constructor(private _http: Http) {
      this.url = "https://jsonplaceholder.typicode.com/users";
      
  }

  getData(){
    return this._http.get(this.url);
  }

}
