import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VegorderService } from '../vegorder.service';
import { NonvegorderService } from '../nonvegorder.service';
import { BeverageorderService } from '../beverageorder.service';
import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
 veg:any;
 nonveg:any;
 beverages:any;
 finalprice:number=0;
 name:string;
 mobile:number;
 email:string;
  constructor(private route:Router,private v:VegorderService,private n:NonvegorderService,private b:BeverageorderService,private ul:UserloginService)
   {
     this.veg=this.v.getveg();
     this.nonveg=this.n.getnonveg();
     this.beverages=this.b.getbeverage();
     this.finalprice=this.v.getfinal()+ this.n.getfinal()+this.b.getfinal();
     

   }

  ngOnInit(): void {
    this.name=this.ul.getu();
     this.mobile=this.ul.getm();
     this.email=this.ul.gete();
  }
pay()
{
this.route.navigate(['Pay']);
}
}
