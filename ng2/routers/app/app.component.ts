import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a routerLink="messages">Messages</a></li>
      <li><a routerLink="photos">Photos</a></li>
      <li><a [routerLink]="['photos',1]">Photos</a></li>
    </ul>
    <button (click)="onClick()">Click</button>
    <router-outlet></router-outlet>
`
})
export class AppComponent {
  constructor(private _route: Router){

  }

  onClick(){
    this._route.navigate(['photos',2]);
  }
}