import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 productId !: string

 productobj! :Iproduct
  constructor(
    private _routes:ActivatedRoute,
    private _productservice:ProductService,

  ) { }

  ngOnInit(): void {
    //fisrt we need a product id
    this.productId = this._routes.snapshot.params['id']

    if(this.productId){
      this.productobj=this._productservice.fetchproduct(this.productId)
    }
  }


  Onremoveproduct(){
    let getConfirm = confirm('Are you sure?')
    if(getConfirm){
      this._productservice.removeproduct(this.productId)
    }


  }

}
