import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'structureEnquiry';
 logo:string="/assets/logo.png";

constructor(private route:Router)
{}


 order()
 {
 this.route.navigate(['Login']);
 }
}
