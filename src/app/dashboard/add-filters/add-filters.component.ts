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

  constructor(private service:ServeService){
    this.getalldata()
  }
  ngOnInit(): void {}
  getalldata(){

  }

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

  createuser(data:any){
    console.log(this.treeview)
  }
}
