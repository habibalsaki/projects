import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';


@Injectable()
export class AuthGurad implements CanActivate{

    canActivate(){
        return false;
    }
}