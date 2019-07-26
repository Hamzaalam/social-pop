import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor() { 
    let token= localStorage.getItem('token');
    console.log("current user token" +token)
  }

  ngOnInit() {
  }

  

}
