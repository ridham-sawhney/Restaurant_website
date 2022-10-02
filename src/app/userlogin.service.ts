import { Injectable } from '@angular/core';
import { UsercheckService } from './usercheck.service';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  username:string="";
  mobile:number;
  email:string;
  users:any;
  
  constructor(private u:UsercheckService) {
    this.users=this.u.getuser();
   }

  addu(name:string)
  {
    this.username=name;

    for(let i=0;i<this.users.length;i++)
    {
      if(this.username==this.users[i].username)
      {
        this.mobile=this.users[i].mobile;
        this.email=this.users[i].email;
      }
    }
  }

  getu()
  {
    return this.username;

  }

  getm()
  {
    return this.mobile;
    
  }
  gete()
  {
    return this.email;
    
  }

  
}
