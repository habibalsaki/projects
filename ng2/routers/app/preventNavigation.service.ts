import { PhotosComponent } from './photos/photos.component';
import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';


@Injectable()
export class PreventNavigation implements CanDeactivate<PhotosComponent>{

    canDeactivate(){
        return false;
    }
}