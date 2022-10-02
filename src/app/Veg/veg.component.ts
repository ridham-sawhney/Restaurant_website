import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VegorderService } from '../vegorder.service';
import { dish } from './vegdishservice';
@Component({
  selector: 'app-root',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class vegComponent {
    logo:string="/assets/logo.png";
    dishes:any;
    quantity:number=1;
    


    constructor(private route:Router,private d:dish,private v:VegorderService)
    {

    }

    ngOnInit():void
    {
     this.dishes=this.d.dish();
    }

    cart()
    {
      this.route.navigate(['Cart']);
    }

    beverage()
    {
      this.route.navigate(['Beverages']);
    }

    nonveg()
    {
      this.route.navigate(['NonVeg']);
    }

    addcart(n:string,q:number,p:number)
    {
      this.v.addveg(n,this.quantity,p);
      this.quantity=1;
    }

   
}
