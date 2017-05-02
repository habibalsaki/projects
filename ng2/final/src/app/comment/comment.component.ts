import { CommentService } from './comment.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnChanges {

  @Input() postId: number;
  private comments: any[];
  private isLoading: boolean = true;

  constructor(private service: CommentService) { }

  ngOnInit() {
    // this.service.getCommentsForPost(this.postId)
    //     .subscribe(data => this.comments = data.json());
  }


  ngOnChanges(){
      this.comments = [];
      this.isLoading = true;
      this.service.getCommentsForPost(this.postId)
        .subscribe(data => {
          this.comments = data.json();
          this.isLoading = false;
        });
  }


}
