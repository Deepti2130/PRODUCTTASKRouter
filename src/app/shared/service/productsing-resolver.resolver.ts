import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsingResolverResolver implements Resolve<Iproduct> {

  private _productService = inject(ProductService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct {
    //id of the product
   console.log(route['params'])
   let productId:string = route.params['id']
    //get id from params


    //API call using product service
    let obj = this._productService.fetchproduct(productId)
    console.log(obj)
    return obj
  }
}
