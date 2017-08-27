import { CanDeactivate } from '@angular/router';
import { canDeactivateInterface } from './../candeactive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, canDeactivateInterface {

  constructor() { }

  ngOnInit() {
  }

  canDeactivate(){
    return confirm("do you want to leave?");
  }

}
