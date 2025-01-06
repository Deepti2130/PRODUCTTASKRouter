import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductformComponent } from '../component/products/productform/productform.component';
import { IcanDeactivateComp } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CompDeactivateGuard implements CanDeactivate<IcanDeactivateComp> {
  canDeactivate(
    component: IcanDeactivateComp,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }

}
