import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPageModule } from './../pages/settings/settings.module';
import { LibraryPageModule } from './../pages/library/library.module';
import { QuotePageModule } from './../pages/quote/quote.module';
import { QuotesPageModule } from './../pages/quotes/quotes.module';
import { FavoritePageModule } from './../pages/favorite/favorite.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FavoritePageModule,
    QuotesPageModule,
    QuotePageModule,
    LibraryPageModule,
    SettingsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
