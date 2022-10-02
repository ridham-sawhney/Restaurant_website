import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsercheckService } from '../usercheck.service';
import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    logo:string="/assets/logo.png";
     username:string="";
     password:string="";
     users:any;
    constructor(private route:Router,private u:UsercheckService,private ul:UserloginService)
    {
    this.users=this.u.getuser();
    }


    signup()
    {
      this.route.navigate(['Register']);
    }

    login()
    {

      if(this.checkvalidity())
      {
        let check=0;

        for(let i=0;i<this.users.length;i++)
        {
          if(this.username==this.users[i].username  && this.password==this.users[i].password)
          {
            check=1;
            this.ul.addu(this.username);
            this.route.navigate(['Category']);
          }
        }
  
        if(check==0)
        {
          alert("user not found\n Sign up to continue");
        }
      }
   

      
      
    }

    
  checkvalidity()
  {
    if(this.username == "" || this.password == "" ){
      alert("fields are empty");
      return false;
  }
  else {
    return true;
  }
  }

}
