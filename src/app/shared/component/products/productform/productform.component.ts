import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp, Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit, IcanDeactivateComp {
productId!:string

productobj!:Iproduct

productForm!:FormGroup

isIneditmode : boolean = false

updatebtnFlag:boolean = false

  constructor(
    private _routes:ActivatedRoute,
    private _productservice:ProductService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name:new FormControl(null,Validators.required),
      rating:new FormControl(null,Validators.required),
      image:new FormControl(null,Validators.required),
      price:new FormControl(null,Validators.required),
      offerprice:new FormControl(null,Validators.required),
      noofitem:new FormControl(null,Validators.required),
      pstatus:new FormControl(null,Validators.required),
      canreturn:new FormControl(null,Validators.required),
      isAvailable:new FormControl(null,Validators.required)
    })

    this.productId = this._routes.snapshot.params['id']
    if(this.productId){
      this.isIneditmode = true

      this.productobj = this._productservice.fetchproduct(this.productId)
      this.productForm.patchValue({...this.productobj,
        canreturn:this.productobj.canreturn? "Yes" : "No",
        isAvailable:this.productobj.isAvailable? "Yes" : "No"})
    }

    this._routes.queryParams
    .subscribe((params:Params)=>{
      console.log(params)

      if(params['canreturn']=== '0'){
        this.productForm.disable()
        this.updatebtnFlag = true
      }
    })
  }

  onproductAdd(){
  if(this.productForm.valid){
    let canReturnval = this.productForm.controls['canreturn'].value === "Yes" ? 1 : 0

    // console.log({...this.productForm.value,canreturn:canReturnval})

    let product:Iproduct = {
      ...this.productForm.value,
      canreturn:canReturnval,
      id:this._uuidservice.generateUuid()
    }

    console.log(product)

    this._productservice.postproduct(product)
  }
  }


  onupdateproduct(){
    let updatedobj:Iproduct = {
      ...this.productForm.value,
      canreturn:this.productForm.controls['canreturn'].value === "Yes" ? 1:0,
      isAvailable:this.productForm.controls['isAvailable'].value === "Yes" ? "true" : "false",
      id:this.productId
    }
    console.log(updatedobj)
    this.productForm.reset()

    this._productservice.updatedproduct(updatedobj)
  }

  canDeactivate(){
   //if there is no any change in form === true

   //change and updated === true


    //change and not updated === ask???


    //are you sure you want to descard the changes true || false

    if(this.productForm.dirty){
      let getconfirmation = confirm('Are you sure you want to descard the changes?')
      return (getconfirmation)
    }
    return true


  }

}
