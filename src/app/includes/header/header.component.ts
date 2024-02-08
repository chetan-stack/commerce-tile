import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showheader: any = true;
  constructor(private router:Router,private servive:ServeService){
  //   this.servive.changerote.subscribe((res:any) =>{
  //     console.log('data')
  //     const url = window.location.pathname
  //   console.log(window.location.pathname,'this.url header')
  //  if(url == '/explore'){
  //    this.showheader = true
  //  }
  //  else{
  //    this.showheader = false
  //  }
  //   })
  this.router.events
  .subscribe((res:any) => {
    if(res.url !== undefined){
      // console.log(res.url)
       if(res.url == '/explore' || res.url == '/explore/product-details'){
     this.showheader = true
   }
   else{
     this.showheader = false
   }
  }
    });
   }


   ngOnInit(): void {}

   pushservice(){
    // this.servive.changerote.next('change')

   }
}
