import { UserService } from './../user/user.service';
import { CommentComponent } from './../comment/comment.component';
import { Response } from '@angular/http';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import * as _ from 'underscore';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private posts: any[];
  private users: any[];
  private pagedPosts: any[];
  private isLoading: boolean;
  private singlePostTitle: string;
  private singlePostBody: string;
  private singlePostId: number;
  private pageSize: number = 10;
  private currentPage = 1;

  constructor(private service: PostService,
    private userService: UserService          
  ) { }

  ngOnInit() {
    
    this.loadUsers();
    this.loadPosts();
  }

  private loadUsers(){
    this.userService.getData().subscribe(data => {
      this.users = data.json();
    });
  }

  private loadPosts(filter?){
    this.getPostsOnPage(this.currentPage, filter);
  }

  private reloadPosts(filter){
    this.loadPosts(filter);
  }

  private showPost(post){
    this.singlePostBody = post.body;
    this.singlePostTitle = post.title;
    this.singlePostId = post.id;
  }

  private changePage(ev){
    this.getPostsOnPage(ev);
  }

  private getPostsOnPage(page, filter?){
    this.posts = [];
    this.isLoading = true;
    this.service.getAllPosts(filter).subscribe(response => {
      this.posts = response.json();
      this.pagedPosts = _.take(_.rest(this.posts, page - 1), this.pageSize);
    }, null, () => this.isLoading = false);
  }

}
