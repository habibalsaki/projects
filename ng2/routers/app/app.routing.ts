import { AuthGurad } from './auth-guard.service';
import { PhotoDetailsComponent } from './photos/photo-details.component';
import { NotFoundComponent } from './not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home.component';
import {Router, RouterModule} from '@angular/router';

export const routing = RouterModule.forRoot([
    {path: "", component: HomeComponent},
    {path: "messages", component: MessagesComponent, canActivate: [AuthGurad]},
    {path: "photos/:id", component: PhotoDetailsComponent},
    {path: "photos", component: PhotosComponent},
    {path: "**", component: NotFoundComponent}
])