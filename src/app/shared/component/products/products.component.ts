import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productinfo! : Array<Iproduct>

  selectedprodId! : string
  isAvailable:boolean = false

  constructor(
    private _productservice :ProductService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.productinfo = this._productservice.fetchAllproduct()
    this.selectedprodId = this.productinfo[0].id,
    this._router.navigate([this.productinfo[0].id],{
      relativeTo:this._route,
      queryParams:{canreturn:this.productinfo[0].canreturn}
    })


  }

  onclickproduct(product:Iproduct){
  // console.log(product)
  this.selectedprodId = product.id
  }





}
