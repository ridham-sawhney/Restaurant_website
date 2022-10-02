import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nonvegdish } from './nonvegdishservice';
import { NonvegorderService } from '../nonvegorder.service';
@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {

  ndishes:any;
  quantity:number=1;
    constructor(private route:Router,private d:nonvegdish,private n:NonvegorderService)
    {

    }

    ngOnInit():void
    {
     this.ndishes=this.d.nonvegdish();
    }

    addcart(n:string,q:number,p:number)
    {
      this.n.addnonveg(n,this.quantity,p);
      this.quantity=1;
    }
    

    cart()
    {
      this.route.navigate(['Cart']);
    }

    beverage()
    {
      this.route.navigate(['Beverages']);
    }

    veg()
    {
      this.route.navigate(['Veg']);
    }


}
