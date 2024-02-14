import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showactive: any = false
  constructor(private router:Router){
    
  }
  ngOnInit(): void {}
  openmenu(){
    this.showactive = !this.showactive
  }
}
