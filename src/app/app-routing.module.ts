import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductformComponent } from './shared/component/products/productform/productform.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"products/addproduct",
    component:ProductformComponent
  },
  {
    path:"products/:id",
    component:ProductComponent
  },
  {
    path:"products/:id/edit",
    component:ProductformComponent
  },
  {
    path:"fairs",
    component:FairsComponent
  },
  {
    path:"pagenotfound",
    component:PagenotfoundComponent
  },
  {
    path:"**",
    redirectTo:"pagenotfound"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
