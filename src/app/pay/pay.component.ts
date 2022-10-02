import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {


  toogle1:boolean=false;
  toogle2:boolean=false;
  b:boolean=true;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
pay()
{
  alert("payment successful!");
  this.route.navigate(['Category']);
}

  t1()
  {
    if(this.b)
    {
      this.toogle2=!this.toogle2;
      this.b=!this.b;
    }
    this.toogle1=!this.toogle1;
    this.toogle2=!this.toogle2;
  }

  t2()
  {
    if(this.b)
    {
      this.toogle1=!this.toogle1;
      this.b=!this.b;
    }
    this.toogle2=!this.toogle2;
    this.toogle1=!this.toogle1;
  }

}
