import { Component, HostListener, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-explore-more',
  templateUrl: './explore-more.component.html',
  styleUrls: ['./explore-more.component.scss']
})
export class ExploreMoreComponent implements OnInit {

  boxfilter: any = [
    {
      id: '1',
      class: 'tile1',
      value: '30x30',
      active: 0,
      margin: '-34px'
    },
    {
      id: '2',
      class: 'tile2',
      value: '60x60',
      active: 0,
      margin: '-34px'

    },
    {
      id: '3',
      class: 'tile3',
      value: '80x160',
      active: 0,
      margin: '-29px'
    },
    {
      id: '4',
      class: 'tile4',
      value: '160 x 320',
      active: 0,
      margin: '-12px'
    },
    {
      id: '5',
      class: 'tile5',
      value: '60x120',
      active: 0,
      margin: '-1px'

    },
    {
      id: '6',
      class: 'tile6',
      value: '20x120',
      active: 0,
      margin: '0px'

    },
    {
      id: '7',
      class: 'tile7',
      value: '30x60',
      active: 0,
      margin: '-23px'

    },
  ]
  boxfiltermobile: any = [
    {
      id: '1',
      class: 'tile1',
      value: '30x30',
      active: 0,
      margin: '-18px'
    },
    {
      id: '2',
      class: 'tile2',
      value: '60x60',
      active: 0,
      margin: '-15px'

    },
    {
      id: '3',
      class: 'tile3',
      value: '80x160',
      active: 0,
      margin: '-12px'
    },
    {
      id: '4',
      class: 'tile4',
      value: '160x320',
      active: 0,
      margin: '-2px'
    },
    {
      id: '5',
      class: 'tile5',
      value: '60x120',
      active: 0,
      margin: '5px'

    },
    {
      id: '6',
      class: 'tile6',
      value: '60x120',
      active: 0,
      margin: '5px'

    },
    {
      id: '7',
      class: 'tile7',
      value: '30 X 60',
      active: 0,
      margin: '-7px'

    },
  ]

  sidebar: any = [
    {
      header: 'Surface',
      data: [
        
      ]
    },
    {
      header: 'Thickness',
      data: [
        
      ]
    }
  ]
  showfilter: any = false;


  productdata: any = []
    productdetaildata: any;
  sizefilter: any;
  isSticky: any;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
    // console.log(this.isSticky)
  }
  constructor(private service: ServeService) {

  }
  ngOnInit(): void {
    this.getalldata()
    this.addclassactive('4')
    this.productdetaildata = this.productdata

  }

  opensidebar() {
    this.showfilter = !this.showfilter
  }
  sortByProperty(arr: any, property: any) {
    return arr.sort((a: any, b: any) => a[property] - b[property]);
  }

  swapIds(arr: any, id1: any, id2: any) {
    // Find the indices of the elements with the given IDs
    const index1 = arr.findIndex((item: any) => item.id === id1);
    const index2 = arr.findIndex((item: any) => item.id === id2);

    // If both IDs exist in the array, swap their IDs
    if (index1 !== -1 && index2 !== -1) {

      arr.forEach((item: any) => {
        item.active = 0;
      });

      arr[index2].active = 1;
      this.sizefilter = arr[index2]

      const tempId = arr[index1].id;
      arr[index1].id = arr[index2].id;
      arr[index2].id = tempId;

      arr.sort((a: any, b: any) => a.id - b.id);


    }

    return arr;
  }

  addclassactive(id: any) {
    console.log(id)
    // this.boxfilter.forEach((element:any) => {
    //   if(element.id == id){
    //     // element.id == '1'?id
    //     element.id = '1'
    //   }

    // });
    let arr = this.swapIds(this.boxfilter, id, id)
    console.log(this.sizefilter['value'], 'check data')
    const result: any = this.productdata.filter((res: any) => res.actsize == this.sizefilter['value'])
    this.productdetaildata = result
  }
  newArray: any = []
  checkeddata(ev: any, data: any, i: any) {
    console.log(ev, data)
    if (ev.target.checked) {
      this.newArray.push(data);
    } else {
      let el = this.newArray.find((itm: any) => itm === data);
      if (el)
        this.newArray.splice(this.newArray.indexOf(el), 1);
    }
    const filteroptionlables = this.newArray.map((res: any) => res.optionlable)
    const productfilter = this.productdata.filter((res: any) => filteroptionlables.includes(res?.['type ']) || filteroptionlables.includes(res?.['thickness ']))
    console.log(this.newArray, productfilter, filteroptionlables, filteroptionlables.legth)
    if (filteroptionlables.length == 0) {
      this.productdetaildata = this.productdata
    }
    else {
      this.productdetaildata = productfilter
    }
  }

  alldata: any = []
  getalldata() {
    this.service.getdata({}).subscribe((res: any) => {
      // const reddata = JSON.parse(res.alldata)
      this.alldata = res
      this.alldata.forEach((element: any, i: any) => {
        element.id = element.id
        element.convertdata = typeof element.alldata === 'string' ? JSON.parse(element.alldata) : element.alldata
      });
      console.log(this.alldata, 'data')
      this.alldata.forEach((res: any) => {
        res.convertdata['id'] = res.id
        res.convertdata['actsize'] = '160 x 320'
        this.productdata.push(res.convertdata)
      })
      console.log(this.productdata)

      // this.sidebar = this.productdata

      this.productdata.forEach((res:any) => {
        const sidetitlle:any = {
          optionlable:res?.['type '],
          optionvalue:res?.['type '],
        }
        this.sidebar[0].data?.push(sidetitlle)
      })

      let uniqueObjects:any = this.sidebar[0].data.filter((obj:any, index:any, self:any) =>
        index === self.findIndex((t:any) => (
          t.optionlable === obj.optionlable
        ))
      );
      this.sidebar[0].data = uniqueObjects


      this.productdata.forEach((res:any) => {
        const sidetitlle:any = {
          optionlable:res?.['thickness '],
          optionvalue:res?.['thickness '],
        }
        this.sidebar[1].data?.push(sidetitlle)
      })

      console.log(this.sidebar[1])

      let uniqueObjects2:any = this.sidebar[1].data.filter((obj:any, index:any, self:any) =>
        index === self.findIndex((t:any) => (
          t.optionlable === obj.optionlable
        ))
      );
      this.sidebar[1].data = uniqueObjects2

      // this.sidebar[0].data = [...new Set(this.sidebar[0].data)];

    })

  }

  sendparam(data:any){
    localStorage.setItem('id',data)
  }

  calcuwordlen(data:any){
    let datasplit = data.split('').length
    if(datasplit > 10){
      return true
    }
    else{
      return false
    }
  }

}
