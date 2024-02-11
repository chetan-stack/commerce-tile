import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/serve.service';

@Component({
  selector: 'app-add-filters',
  templateUrl: './add-filters.component.html',
  styleUrls: ['./add-filters.component.scss']
})
export class AddFiltersComponent implements OnInit{

  treeview:any = [
    {
      parent:'head',
      child:[
        {
          optionlable:'child1',
          optionvalue:'child2'
        }
      ]
    }
  ]
  alldata: any;
  showfilterdata: any;

  constructor(private service:ServeService){
    this.getalldata()
  }
  ngOnInit(): void {}
  

  addfilter(i:any){
    console.log(this.treeview)
    console.log(i)
    const data:any = {}
    const newData = {...data };
    this.treeview[i].child.push(newData);
    
  }

  delete(n:any,i:any){
    this.treeview[n].child.splice(i, 1)
  }

  addparenet(){
    const data:any = {
      parent:'head',
      child:[
        {
          optionlable:'child1',
          optionvalue:'child2'
        }
      ]
    }
    this.treeview.push(data)
  }

  deleteitem(data:any){
    this.service.deleteuser({id:data}).subscribe((res:any) => {
      this.getalldata()
    })
  }

  getalldata(){
    this.service.getdata({}).subscribe((res:any) => {
      // const reddata = JSON.parse(res.alldata)
      this.alldata = res
      console.log(res)
      this.alldata.forEach((element:any,i:any) => {
        element.id = element.id
        element.convertdata = typeof element.alldata === 'string'?JSON.parse(element.alldata):element.alldata
      });
      const result:any = this.alldata.filter((res:any) => {
        if(res['convertdata']['type'] == 'filter'){
            return res
        }
      })
      this.showfilterdata = result
    })
  }

  createuser(data:any){
    const createdata:any = {
      type : 'filter',
      data : this.treeview
    }
    this.service.createuserdata(createdata).subscribe((res:any) => {
      data.reset()
      this.getalldata()
    })
    }
}
