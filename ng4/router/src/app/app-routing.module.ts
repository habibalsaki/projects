import { CandeactiveService } from './candeactive.service';
import { AuthguardService } from './authguard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "users", component: UsersComponent, canActivate: [AuthguardService], children: [
    {path: "edit", component: UsersComponent}
  ]},
  {path: "user/:id", component: UserComponent},
  {path: "posts", component: PostsComponent, canDeactivate: [CandeactiveService]},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "not-found"} // wildcard route
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],

  declarations: []
})
export class AppRoutingModule { }
