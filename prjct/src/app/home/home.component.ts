import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
showPage= false; 
  constructor(private route: Router) { };

  ngOnInit() {
  }
 hidenavpage(){
   console.log(this.showPage)
  this.showPage = true;
  this.route.navigate(['/submitAd']);
 }
}
