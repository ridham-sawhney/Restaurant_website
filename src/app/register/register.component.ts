import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsercheckService } from '../usercheck.service';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent
 {
    logo:string="/assets/logo.png";
    username:string="";
    password:string="";
    mobile:number=0;
    email:string="";
    users:any;
   
    
    
    

    constructor(private route:Router,private u:UsercheckService)
    {
      this.users=this.u.getuser();
    }

    register()
    {
   
      if(this.checkfield())
      {
       
        
        
     if(this.checkemail())
     {
      if(this.checkmobile())
      {
        if(this.checkusers())
        {
         
          
            this.u.adduser(this.username,this.password,this.mobile,this.email)
            this.route.navigate(['Login']); 
         
            
        }
    
        else{
          alert("username already exists for other account")
        }   
       
      }
  
      else{
        alert("mobile already exists for other account")
      }
      
     }
 
     else{
       alert("email already exists for other account")
     }
       
          
      }
  
      else{
        alert("Fill all Fields")
      }   
 



 
    



      
    }
    signin()
    {
      this.route.navigate(['Login']);
    }

     checkemail()
    {
     
     for(let i=0;i<this.users.length;i++)
     {
      if(this.email==this.users[i].email)
      {
        return false;
      }
     }
     return true;
    }

    checkmobile()
    {
      

      
     for(let i=0;i<this.users.length;i++)
     {
      if(this.mobile==this.users[i].mobile)
      {
        return false;
      }
     }
     return true;
    }

    checkusers()
    {
      

      
     for(let i=0;i<this.users.length;i++)
     {
      if(this.username==this.users[i].username)
      {
        return false;
      }
     }
     return true;
    }

    checkfield()
  {
    if(this.username == "" || this.password == "" || this.mobile == 0 || this.email == "" ){
      alert("fields are empty");
      return false;
  }
  else {
    return true;
  }
  }




}
