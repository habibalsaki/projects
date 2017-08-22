import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBasicHighlightDirective } from './add-basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddBasicHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
