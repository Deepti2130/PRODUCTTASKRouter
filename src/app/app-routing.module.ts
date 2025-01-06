import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductformComponent } from './shared/component/products/productform/productform.component';
import { FairDetailsComponent } from './shared/component/fairs/fair-details/fair-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AuthGuardService } from './shared/service/auth-guard.service';
import { AdminDashComponent } from './shared/component/admin-dash/admin-dash.component';
import { UserroleGuard } from './shared/service/userrole.guard';
import { CompDeactivateGuard } from './shared/service/comp-deactivate.guard';
import { ProductResolver } from './shared/service/productResolver.service';
import { ProductsingResolverResolver } from './shared/service/productsing-resolver.resolver';

const routes: Routes = [
  {
    path:"",
    component:AuthComponent
    // redirectTo:"home",
    // pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuardService,UserroleGuard],
    title:'Dashboard',
    data:{
      userrole:["Admin", "Buyer" ,"SuperAdmin"]
    }
  },
  {
    path:"users",
    component:UsersComponent,
    canActivate:[AuthGuardService,UserroleGuard],
    title:'users',
    data:{
      userrole:["Admin", "SuperAdmin"]
    }
  },
  {
    path:"products",
    component:ProductsComponent,
    canActivate:[AuthGuardService,UserroleGuard],
    // canActivateChild:[AuthGuardService,UserroleGuard],
    title:'products',
    data:{
      userrole:["Admin", "Buyer" ,"SuperAdmin"]
    },
    resolve:{productsData:ProductResolver},
    children:[
      {
        path:"addproduct",
        component:ProductformComponent
      },
      {
        path:":id",
        component:ProductComponent,
        resolve:{productobj:ProductsingResolverResolver}
      },
      {
        path:":id/edit",
        component:ProductformComponent,
        canDeactivate:[CompDeactivateGuard]
      },
    ]
  },

  {
    path:"fairs",
    component:FairsComponent,
    canActivate:[AuthGuardService,UserroleGuard],
    title:'fairs',
    data:{
      userrole:["Admin", "Buyer" ,"SuperAdmin"]
    },
    children:[
      {
        path:":fairId",
        component:FairDetailsComponent,

      }
    ]
  },
  {
    path:"Admin",
    component:AdminDashComponent,
    title:"Admin",
    canActivate:[AuthGuardService,UserroleGuard],
    data:{
      userrole:["SuperAdmin"]
    }
  },
  {
    path:"pagenotfound",
    component:PagenotfoundComponent,
    canActivate:[AuthGuardService],
    title:'pagenotfound',
    data:{
      msg:'pagenotfound (using static data of Routing)'
    }
  },
  {
    path:"**",
    redirectTo:"pagenotfound"
  }
];

//deepti@gmail.com - buyer - products,Home and fairs
//jay@gmail.com - Admin - Home, users, products and fairs
//ritvi@gmail.com - superadmin - Home, users, products and fairs, admins

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
