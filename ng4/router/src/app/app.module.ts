import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "users", component: UsersComponent},
  {path: "user/:id", component: UserComponent},
  {path: "posts", component: PostsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
