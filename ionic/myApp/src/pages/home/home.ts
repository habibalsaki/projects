import { UsersPage } from './../users/users';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToUsersPage(){
    this.navCtrl.push(UsersPage);
  }

}
