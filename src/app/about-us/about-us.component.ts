import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  showkey:any
   constructor(){
this.showcol('2001')
   }
   showcol(data:any)
   {
    console.log(data)
      this.showkey = data
   }

   
  ngOnInit(): void {
  
  }
}
