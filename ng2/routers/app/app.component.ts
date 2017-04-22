import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink = "">Home</a></li>
      <li><a routerLink = "messages">Messages</a></li>
      <li><a routerLink = "photos">Photos</a></li>
      <li><a [routerLink] = "['photos', 1]">Photo Details</a></li>
    </ul>
    <button (click)="OnClick()">Photo Details</button>
    <router-outlet></router-outlet>
`
})
export class AppComponent {
  constructor(private _router: Router){}

  OnClick(){
    this._router.navigate(['photos',2])
  }
}