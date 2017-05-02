import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  private postUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {   

  }

  getAllPosts(filter?){
    
    var url = this.postUrl;
    if(filter && filter.userId)
      url += `?userId=${filter.userId}`; 
    return this._http.get(url);
  }

}
