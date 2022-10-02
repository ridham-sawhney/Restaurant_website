import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeverageorderService {
  tprice:number;
  f:number;
  public beverageorder=[{"name":" ","price":0,"quantity":0,"tprice":0}];
  
  addbeverage(name:string, price:number,quantity:number)
  {
   this.tprice=price*quantity;
   this.beverageorder.push({"name":name,"price":price,"quantity":quantity,"tprice":this.tprice});
   alert("added to cart successfully");
  }
   
  getbeverage()
  {
    return this.beverageorder;
  }
  getfinal()
{ this.f=0;
  
  for(let i=0;i<this.beverageorder.length;i++)
  {
   this.f=this.f+this.beverageorder[i].tprice;
  }
  return this.f;
}
  
  constructor() { }
}
