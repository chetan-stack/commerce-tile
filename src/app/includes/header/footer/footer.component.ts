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
  footershow:any = true
  ngOnInit(): void {}
   constructor(private router:Router){
    this.router.events
    .subscribe((res:any) => {
      if(res.url !== undefined){
        console.log(res.url)

        if(res.url == '/explore'){
          this.footershow = false
        }
        else{
          this.footershow = true
        }

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

  array:any = []

expendfotter:any = [
  {
    name:'about',
    expend:false
  },
  {
    name:'corporate',
    expend:false
  },
  {
    name:'export',
    expend:false
  },
  {
    name:'contact',
    expend:false
  }

]

  //  openfooter(data:any){
  //   this.showopen = data
  //   this.array = [...this.array]
  //   this.array.push(data)

  //   let condition = this.array.filter((res:any) => res.includes(data))

  //   console.log(condition,data,"---")
  //   if(condition.length == 2){
  //     this.array = []
  //     this.showopen = ''

  //   }
  //   else{
     
  //   }
  //   console.log(this.array,data)
  //  }
  openfooter(data:any,i:any){
    console.log(data,i,this.expendfotter[i])
    this.expendfotter[i]['expend'] = !this.expendfotter[i]['expend']

    this.expendfotter.forEach((res:any,a:any) => {
      if(a != i){
        res.expend = false
      }
      console.log(res,i)
      // res.expend = 
    })
    console.log(this.expendfotter[i]['expend'])
  }
}
