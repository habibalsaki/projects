import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  private userUrl: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private _http: Http) { }

  public getUsers(){
    return this._http.get(this.userUrl);
  }
}
