import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddBasicHighlightDirective } from './add-basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { StructuralDirectiveDirective } from './structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddBasicHighlightDirective,
    BetterHighlightDirective,
    StructuralDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
