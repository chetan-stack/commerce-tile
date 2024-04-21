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
  boxpices:any
  boxsqf:any
  boxsqfcal: any;

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
      this.boxpices = this.productdata?.['Piece/box']
      const string_without_sqft = this.productdata?.['inonebox']?.replace("Sq.ft", "")?.trim()
      this.boxsqf = string_without_sqft
      this.boxsqfcal = string_without_sqft


      console.log(this.productdata)
    })
  }

  addtocart(){
    this.productdata['boxpices'] = this.boxpices
    this.productdata['boxsqf'] = this.boxsqf
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
  this.service.productdetailschange.next('1')
  }

addtotalqt:any = 0

  addboxes(){
    this.boxpices = Number(this.boxpices) + 1
    this.boxsqf = Number(this.boxpices) * Number(this.boxsqfcal)
  }

  lessboxes(){
    if(Number(this.boxpices) > 1){
      this.boxpices = Number(this.boxpices) - 1
      this.boxsqf = Number(this.boxpices) * Number(this.boxsqfcal)
    }
   
  }

}
