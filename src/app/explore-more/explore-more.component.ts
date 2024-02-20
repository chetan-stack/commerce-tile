import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-more',
  templateUrl: './explore-more.component.html',
  styleUrls: ['./explore-more.component.scss']
})
export class ExploreMoreComponent implements OnInit {

  boxfilter:any = [
    {
      id:'1',
      class:'tile1',
      value:'160 X 60',
      active:0
    },
    { 
       id:'2',
      class:'tile2',
      value:'180 X 60',
      active:0
    },
    {
      id:'3',
      class:'tile3',
      value:'150 X 60',
      active:0
    },
    {
      id:'4',
      class:'tile4',
      value:'130 X 60',
      active:0
    },
    {
      id:'5',
      class:'tile5',
      value:'120 X 60',
      active:0
    },
    {
      id:'6',
      class:'tile6',
      value:'170 X 60',
      active:0
    },
    {
      id:'7',
      class:'tile7',
      value:'140 X 60',
      active:0
    },
  ]

  sidebar:any = [
    {
      header:'Surface',
      data:[
        {
          optionvalue:'Glossy',
          optionlable:'Glossy'
        },
        {
          optionvalue:'High Gloss',
          optionlable:'High Gloss'
        },
        {
          optionvalue:'Matt',
          optionlable:'Matt'
        }
      ]
    },
    {
      header:'Thikness',
      data:[
        {
          optionvalue:'12 mm',
          optionlable:'Glossy'
        },
        {
          optionvalue:'9 mm',
          optionlable:'High Gloss'
        },
        {
          optionvalue:'6 mm',
          optionlable:'Matt'
        }
      ]
    }
  ]
  showfilter:any= false;


  productdata:any = [
    {
      title:'card title',
      size:'150 X 60',
      image:'',
      type:'Glossy'
    },
    {
      title:'card title',
      size:'130 X 60',
      image:'',
      type:'High Gloss'
    },
    {
      title:'card title',
      size:'170 X 60',
      image:'',
      type:'Matt'
    },
    {
      title:'card title',
      size:'140 X 60',
      image:'',
      type:'Glossy'
    },
    {
      title:'card title',
      size:'180 X 60',
      image:'',
      type:'Matt'
    }
  ]
  productdetaildata: any;
  sizefilter: any;
  isSticky: any;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 450;
    // console.log(this.isSticky)
  }
  constructor(){

  }
  ngOnInit(): void {
    this.productdetaildata = this.productdata 
    // this.addclassactive('4')
  }

  opensidebar(){
    this.showfilter = !this.showfilter
  }
  sortByProperty(arr:any, property:any) {
    return arr.sort((a:any, b:any) => a[property] - b[property]);
  }

  swapIds(arr:any, id1:any, id2:any) {
    // Find the indices of the elements with the given IDs
    const index1 = arr.findIndex((item:any) => item.id === id1);
    const index2 = arr.findIndex((item:any) => item.id === id2);
    
    // If both IDs exist in the array, swap their IDs
    if (index1 !== -1 && index2 !== -1) {

      arr.forEach((item:any) => {
        item.active = 0;
      });

      arr[index2].active = 1;
      this.sizefilter = arr[index2]

      const tempId = arr[index1].id;
      arr[index1].id = arr[index2].id;
      arr[index2].id = tempId;

      arr.sort((a:any, b:any) => a.id - b.id);

     
    }
  
    return arr;
  }

  addclassactive(id:any){
    console.log(id)
    // this.boxfilter.forEach((element:any) => {
    //   if(element.id == id){
    //     // element.id == '1'?id
    //     element.id = '1'
    //   }
      
    // });
   let arr = this.swapIds(this.boxfilter,id,id)
    console.log(this.sizefilter['value'],'check data')
    const result:any = this.productdata.filter((res:any) => res.size == this.sizefilter['value'])
    this.productdetaildata = result
  }
  newArray:any = []
  checkeddata(ev:any,data:any,i:any){
    if (ev.target.checked) {
      this.newArray.push(data);
    } else {
      let el = this.newArray.find((itm: any) => itm === data);
      if (el)
        this.newArray.splice(this.newArray.indexOf(el), 1);
    }
    const filteroptionlables = this.newArray.map((res:any) => res.optionlable)
    const productfilter = this.productdata.filter((res:any) => filteroptionlables.includes(res.type))
    console.log(this.newArray,productfilter,filteroptionlables,filteroptionlables.legth)
    if(filteroptionlables.length == 0)
    {
      this.productdetaildata = this.productdata
    }
    else
    {
      this.productdetaildata = productfilter
    }
  }

}
