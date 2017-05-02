import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import * as _ from 'underscore';


@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() item;
  @Input('page-size') pageSize: number; 
  @Output('page-changed') pageChanged = new EventEmitter();

  private pages: any[] = [];
  private currentPage: number;

  constructor() { }

  ngOnInit() {
    this.currentPage = 1;
  }
  
  ngOnChanges(){
    
    var pagesCount = this.item.length / this.pageSize;
    this.pages = [];
    for(var i = 1; i <= pagesCount; i++){
      this.pages.push(i);
    }
  }

  showPagedPosts(ev){
    this.currentPage = ev;
    this.pageChanged.emit(this.currentPage);
  }
}
