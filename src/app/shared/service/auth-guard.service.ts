import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _Authservice:AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | Promise<boolean> | boolean {
     //returning loginstatus of the user
     return this._Authservice.isAuthenticated()
     .then(res=>{
       return res
     })
     //the function return promise hence it is need to consume


  }

}