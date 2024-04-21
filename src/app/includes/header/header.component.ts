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
  totlalcard:any
  constructor(private router:Router,private servive:ServeService, private _location:Location,
    ){

      this.servive.productdetailschange.subscribe((res:any) => {
        console.log('abc')
        const getcarddata:any = localStorage.getItem('productdata')
        const data = JSON.parse(getcarddata)

        this.totlalcard = data?.length?data?.length:0

      })

    this.servive.inputValue$.subscribe((res:any) =>{
      //  console.log(this._location.path()) 
       const path = this._location.path()
       if(path == '/explore' || path == '/explore/product-details'){
        this.showheader = true
      }
      else{
        this.showheader = false
      }
    })
    const getdata = localStorage.getItem('productdata')
    console.log(getdata,'header')

  
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
