import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{
  private name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.name = this.navParams.get('username');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  onConfirm(){
    this.navCtrl.popToRoot();
  }

}
