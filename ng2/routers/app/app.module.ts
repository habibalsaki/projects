import { PreventNavigation } from './preventNavigation.service';
import { AuthGurad } from './auth-guard.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module'; 
import { PhotosModule } from './photos/photos.module';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    MessagesModule,
    PhotosModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [AuthGurad, PreventNavigation],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }