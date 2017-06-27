import { LibraryPage } from './../library/library';
import { FavoritePage } from './../favorite/favorite';
import { Component } from '@angular/core';

@Component({
    selector: 'tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="pageFavorite" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="pageLibrary" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage{
    pageFavorite: any = FavoritePage;
    pageLibrary: any = LibraryPage;
}