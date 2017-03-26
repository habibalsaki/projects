import {Router, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {PhotosComponent} from './photos/photos.component';
import {PhotoDetailsComponent} from './photos/photo-details.component';
import {MessagesComponent} from './messages/messages.component';
import {NotFoundComponent} from './not-found.component';

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'photos/:id', component: PhotoDetailsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: '**', component: NotFoundComponent}
]) 
