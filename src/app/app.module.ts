import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material/material.module';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductformComponent } from './shared/component/products/productform/productform.component';
import { FairCardsComponent } from './shared/component/fairs/fair-cards/fair-cards.component';
import { FairDetailsComponent } from './shared/component/fairs/fair-details/fair-details.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AdminDashComponent } from './shared/component/admin-dash/admin-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    PagenotfoundComponent,
    ProductComponent,
    ProductformComponent,
    FairCardsComponent,
    FairDetailsComponent,
    AuthComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
