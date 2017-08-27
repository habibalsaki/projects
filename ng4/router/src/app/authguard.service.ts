import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthguardService implements CanActivate {

  private isLoggedIn = false;
  constructor(private router: Router) { }

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
      if(this.isLoggedIn){
        return true;
      }else{
        this.router.navigate(['/']);
      }
  }

}
