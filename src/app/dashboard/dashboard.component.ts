import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  alldata: any;
  constructor(private service:ServeService){
    this.getalldata()
  }
  ngOnInit(): void {}

  getalldata(){
    this.service.getdata({}).subscribe((res:any) => {
      this.alldata = res
    })
  }

  data = ['abc','abc']
}
