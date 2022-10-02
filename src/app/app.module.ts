import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { registerComponent } from './register/register.component';
import { categoryComponent } from './Category/category.component';

import { images } from './Category/categoryservice';
import { vegComponent } from './Veg/veg.component';
import { dish } from './Veg/vegdishservice';
import { NonvegComponent } from './nonveg/nonveg.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { nonvegdish } from './nonveg/nonvegdishservice';
import { beverages } from './beverages/beverages';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import { PayComponent } from './pay/pay.component';
import { UsercheckService } from './usercheck.service';
import { VegorderService } from './vegorder.service';
import { NonvegorderService } from './nonvegorder.service';
import { BeverageorderService } from './beverageorder.service';
import { UserloginService } from './userlogin.service';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,LoginComponent,registerComponent,categoryComponent,vegComponent, NonvegComponent, BeveragesComponent, CartComponent, BillComponent, PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
  ],
  providers: [images,dish,nonvegdish,beverages,UsercheckService,VegorderService,NonvegorderService,BeverageorderService,UserloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
