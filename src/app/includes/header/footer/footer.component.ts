import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  changecolor: any =  false;
  srcfile: any = 'logo.png';
  showopen: any;

  ngOnInit(): void {}
   constructor(private router:Router){
    this.router.events
    .subscribe((res:any) => {
      if(res.url !== undefined){
        console.log(res.url)

        if(res.url == '/about' || res.url == '/export' || res.url == '/contact-us'){
          this.changecolor = true
          this.srcfile = 'logoblack.png'
        }
        else{
          this.changecolor = false
        }
      }
    })
   }

   openfooter(data:any){
    this.showopen = data
   }
}
