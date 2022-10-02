import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VegorderService } from '../vegorder.service';
import { NonvegorderService } from '../nonvegorder.service';
import { BeverageorderService } from '../beverageorder.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
veg:any;
nonveg:any;
beverages:any;
  constructor(private route:Router,private v:VegorderService,private n:NonvegorderService,private b:BeverageorderService) {
    this.veg=this.v.getveg();
    this.nonveg=this.n.getnonveg();
    this.beverages=this.b.getbeverage();
   }

  ngOnInit(): void {
  }

  bill()
  {
    this.route.navigate(['Bill']);
  }

}
