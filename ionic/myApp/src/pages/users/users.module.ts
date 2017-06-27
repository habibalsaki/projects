import { UserPage } from './user/user';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';

@NgModule({
  declarations: [
    UsersPage,
    UserPage
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    IonicPageModule.forChild(UserPage)
  ],
  exports: [
    UsersPage,
    UserPage
  ]
})
export class UsersPageModule {}
