import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { images } from './categoryservice';


@Component({
  selector: 'app-root',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class categoryComponent {
  title = 'structureEnquiry';
 logo:string="/assets/logo.png";
 images1:any;
 images2:any;
 bev1:string="/assets/categoryimages/beverage1.jpg";
 bev2:string="/assets/categoryimages/shake1.jpg";
 bev1desc:string="When Life gives you LEMONS Make Lemonade and sell for PROFIT";
 bev2desc:string="when Life gets Tough Shake IT";



constructor(private route:Router,private img:images)
{}

ngOnInit():void
{
this.images1=this.img.images1();
this.images2=this.img.images2();

}

logout()
{
  this.route.navigate(['Login']);
}
 order()
 {
 this.route.navigate(['Login']);
 }
}
