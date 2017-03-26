import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Change the password!';

  constructor(private _postService: PostService){
    this._postService.createPosts({userId: 2, title: "hello", body: "hello all"}).subscribe();
  }

  ngOnInit(){
    this._postService.getPosts().subscribe(posts => console.log(posts));
  }
  
}
