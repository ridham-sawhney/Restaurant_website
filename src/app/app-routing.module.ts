import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { registerComponent } from './register/register.component';
import { categoryComponent } from './Category/category.component';
import { vegComponent } from './Veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import { PayComponent } from './pay/pay.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:registerComponent},
  {path:'Category',component:categoryComponent},  
  {path:'Veg',component:vegComponent},
  {path:'NonVeg',component:NonvegComponent},
  {path:'Beverages',component:BeveragesComponent},
  {path:'Cart',component:CartComponent},
  {path:'Bill',component:BillComponent},
  {path:'Pay',component:PayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
