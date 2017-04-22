import { PreventNavigation } from './../preventNavigation.service';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotosComponent } from './photos.component';
import {Router, RouterModule} from '@angular/router';

export const routing = RouterModule.forChild([
    {path: "photos/:id", component: PhotoDetailsComponent},
    {path: "photos", component: PhotosComponent, canDeactivate: [PreventNavigation]}
])