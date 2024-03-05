import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from 'src/app/serve.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showheader: any = true;
  showactive: any = false;
  isStickyhedaer: any = false;
  constructor(private router:Router,private servive:ServeService, private _location:Location,
    ){
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

   @HostListener('window:scroll', ['$event'])
   checkScroll() {
     this.isStickyhedaer = window.pageYOffset >= 10;
        }
   ngOnInit(): void {}
   scrolltotop() {
    // this.addpagedata()
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
   openmenu(){
    this.showactive = !this.showactive
    this.scrolltotop()
  }

  blacklist(){
    this._location.back()
    this.scrolltotop()
  }

}
