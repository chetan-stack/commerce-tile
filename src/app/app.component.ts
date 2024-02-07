import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'ecommerce-tile';
  data = ['abc','abc']
  showheader: any = true;
  constructor(private router:Router,private servive:ServeService){
  //   this.servive.changerote.subscribe((res:any) =>{
  //     const url = window.location.pathname
  //   console.log(this.router,'this.url data')
  //  if(url == '/'){
  //    this.showheader = false
  //  }
  //  else{
  //    this.showheader = true
  //  }
  //   })

  this.router.events
  .subscribe((res:any) => {
    if(res.url !== undefined){
      // console.log(res.url)
       if(res.url == '/'){
     this.showheader = false
   }
   else{
     this.showheader = true
   }
  }
    });
   
   }
  ngOnInit(): void {}
}
