import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercheckService {

  constructor() { }


  public users=[{"username":"Admin","password":"Admin","mobile":1234567890,"email":"admin@gmail.com"}];



  adduser(username:string,password:string,mobile:number,email:string)
  {
    this.users.push({"username":username,"password":password,"mobile":mobile,"email":email});
    alert("user added successfully");
  }


  getuser()
  {
    return this.users;
  }
}
