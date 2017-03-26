import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import {Observable}  from 'rxjs/Observable';
import { Post } from './post';

@Injectable()
export class PostService {

  private _url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private _http: Http) { }

  getPosts(): Observable<Post[]>{
    return this._http.get(this._url)
      .map(res => res.json());
  }

  createPosts(post: Post){
    return this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json());
  }

}
