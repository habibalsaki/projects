import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  url: string;
  
  constructor(private _http: Http) {
      this.url = "https://jsonplaceholder.typicode.com/users";
      
  }

  getData(){
    return this._http.get(this.url);
  }

  getSingleUser(id){
    return this._http.get(`${this.url}/${id}`)
                .map(res => res.json());
  }

  createUser(data: any){
    return this._http.post(this.url, data);
  }

  editUser(data: any, id: number){
    return this._http.put(`${this.url}/${id}`, data);
  }

  deleteUser(id: number){
    return this._http.delete(`${this.url}/${id}`);
  }

}
