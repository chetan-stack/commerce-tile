import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  isSticky: any = true;
  paramid:any
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset <= 1850;
    // console.log(this.isSticky)
  }
  constructor(private service:ServeService,private route: ActivatedRoute){
    this.getsingledata()
  
  }
  alldata:any = []
  productdata:any 

  getsingledata(){
    this.service.updateuser({id:localStorage.getItem('id')}).subscribe((res:any) => {
      this.alldata = res
      this.alldata.forEach((element: any, i: any) => {
        element.id = element.id
        element.convertdata = typeof element.alldata === 'string' ? JSON.parse(element.alldata) : element.alldata
      });
      console.log(this.alldata, 'data')
      this.alldata.forEach((res: any) => {
        
        this.productdata = res.convertdata
      })
      console.log(this.productdata)
    })
  }

  addtocart(){
    let getcarddata = localStorage.getItem('productdata')
    if(getcarddata){
      const data = JSON.parse(getcarddata)
      data.push(this.productdata)
      const stringdata = JSON.stringify(data)
      localStorage.setItem('productdata',stringdata)
      console.log(data,'s')

    }
    else{
      const data = []
      data.push(this.productdata)
      const stringdata = JSON.stringify(data)
      localStorage.setItem('productdata',stringdata)

    }
  
  }

}
