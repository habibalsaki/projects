import { CandeactiveService } from './candeactive.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthguardService } from "./authguard.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthguardService, CandeactiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
