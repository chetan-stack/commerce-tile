import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  alldata: any;
  dropdownlist: any;
  constructor(private service:ServeService){
    this.getalldata()
    this.getdropdown()
  }
  ngOnInit(): void {}

  getalldata(){
    this.service.getdata({}).subscribe((res:any) => {
      // const reddata = JSON.parse(res.alldata)
      this.alldata = res
      this.alldata.forEach((element:any,i:any) => {
        element.id = element.id
        element.convertdata = typeof element.alldata === 'string'?JSON.parse(element.alldata):element.alldata
      });
    })
  }

  getdropdown(){
    this.service.getdropdown({}).subscribe((res:any) => {
      // const reddata = JSON.parse(res.alldata)
      this.dropdownlist = res
     console.log(res)
    })
  }

  uploadfile(file:any){
    console.log(file)
    var formData = new FormData();
    formData.append('file',file.target.files[0]) 
    formData.append('uploadedfilename', file.target.files[0].name)
    this.service.uploadfile(formData).subscribe((res:any) => {
      
    })
  }

  createuser(data:any){
    console.log(data.value)
    this.service.createuserdata(data.value).subscribe((res:any) => {
      data.reset()
      this.getalldata()
    })
  }

  deleteitem(data:any){
    this.service.deleteuser({id:data}).subscribe((res:any) => {
      this.getalldata()
    })
  }

}
