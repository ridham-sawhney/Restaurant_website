import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonvegorderService {
  tprice:number;
  f:number;
  public nonvegorder=[{"name":" ","price":0,"quantity":0,"tprice":0}];
  
  addnonveg(name:string, price:number,quantity:number)
  {
   this.tprice=price*quantity;
   this.nonvegorder.push({"name":name,"price":price,"quantity":quantity,"tprice":this.tprice});
   alert("added to cart successfully");
  }
   
  getnonveg()
  {
    return this.nonvegorder;
  }

  getfinal()
{ this.f=0;
  
  for(let i=0;i<this.nonvegorder.length;i++)
  {
   this.f=this.f+this.nonvegorder[i].tprice;
  }
  return this.f;
}
  constructor() { }
}
