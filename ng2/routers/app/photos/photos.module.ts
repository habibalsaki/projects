
import { NgModule }     from '@angular/core';

import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { routing } from './photos.routing';

@NgModule({
    declarations: [
        PhotosComponent,
        PhotoDetailsComponent,
    ],
    imports:[
        routing
    ],
    exports: [
        PhotosComponent,
        PhotoDetailsComponent
    ]
})
export class PhotosModule {
}