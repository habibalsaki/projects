import { CreateUserComponent } from './../user/create-user/create-user.component';
import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Injectable()
export class HasUnsavedData implements CanDeactivate<CreateUserComponent>{
    
    canDeactivate(component: CreateUserComponent){
        if(component.userForm.dirty){
            return confirm("You have unsaved data. Want to Proceed?");
        }

        return true;
        
    }
}