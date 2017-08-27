import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface canDeactivateInterface {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable()
export class CandeactiveService implements CanDeactivate<canDeactivateInterface>{


  canDeactivate(
    component: canDeactivateInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentSate: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ) { 
    return component.canDeactivate();
  }

}
