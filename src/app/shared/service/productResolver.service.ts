import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Iproduct } from "../model/product";
import { ProductService } from "./product.service";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})

export class ProductResolver implements Resolve<Iproduct[]>{

  constructor(
    private _productservice:ProductService
  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._productservice.fetchAllproduct()

  }

}
