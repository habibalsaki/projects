import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CommentService {

  private commentUrl = "https://jsonplaceholder.typicode.com/posts";;

  constructor(private http: Http) { }

  getCommentsForPost(id: number){
    return this.http.get(`${this.commentUrl}/${id}/comments`)
  }

}
