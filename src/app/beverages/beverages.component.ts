import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { beverages } from './beverages';
import { BeverageorderService } from '../beverageorder.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

  beverages:any;
  quantity:number=1;
    constructor(private route:Router,private d:beverages,private b:BeverageorderService)
    {

    }

    ngOnInit():void
    {
     this.beverages=this.d.beverages();
    }

    cart()
    {
     this.route.navigate(['Cart']);
     
    }
    

    veg()
    {
      this.route.navigate(['Veg']);
    }

    nonveg()
    {
      this.route.navigate(['NonVeg']);
    }

    addcart(n:string,q:number,p:number)
    {
      this.b.addbeverage(n,this.quantity,p);
      this.quantity=1;
    }
   

}
