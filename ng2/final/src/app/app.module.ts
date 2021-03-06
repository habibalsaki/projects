import { PostService } from './post/post.service';
import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';

import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

import { ValidationService } from './validation.service';
import { HasUnsavedData } from './guards/hasUnsavedData.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommentComponent } from './comment/comment.component';
import { CommentService } from './comment/comment.service';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    UserComponent,
    PostComponent,
    HomeComponent,
    NotFoundComponent,
    CreateUserComponent,
    SpinnerComponent,
    CommentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, PostService, CommentService, ValidationService, HasUnsavedData],
  bootstrap: [AppComponent]
})
export class AppModule { }
