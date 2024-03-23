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
      value:'30x30',
      active:0,
      margin:'-34px'
    },
    { 
       id:'2',
      class:'tile2',
      value:'60x60',
      active:0,
      margin:'-34px'

    },
    {
      id:'3',
      class:'tile3',
      value:'80x160',
      active:0,
      margin:'-29px'
    },
    {
      id:'4',
      class:'tile4',
      value:'160x320',
      active:0,
      margin:'-12px'
    },
    {
      id:'5',
      class:'tile5',
      value:'60x120',
      active:0,
      margin:'-1px'

    },
    {
      id:'6',
      class:'tile6',
      value:'20x120',
      active:0,
      margin:'0px'

    },
    {
      id:'7',
      class:'tile7',
      value:'30x60',
      active:0,
      margin:'-23px'

    },
  ]
  boxfiltermobile:any = [
    {
      id:'1',
      class:'tile1',
      value:'30x30',
      active:0,
      margin:'-18px'
    },
    { 
       id:'2',
      class:'tile2',
      value:'60x60',
      active:0,
      margin:'-15px'

    },
    {
      id:'3',
      class:'tile3',
      value:'80x160',
      active:0,
      margin:'-12px'
    },
    {
      id:'4',
      class:'tile4',
      value:'160x320',
      active:0,
      margin:'-2px'
    },
    {
      id:'5',
      class:'tile5',
      value:'60x120',
      active:0,
      margin:'5px'

    },
    {
      id:'6',
      class:'tile6',
      value:'60x120',
      active:0,
      margin:'5px'

    },
    {
      id:'7',
      class:'tile7',
      value:'30 X 60',
      active:0,
      margin:'-7px'

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
      header:'Thickness',
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
      "title": "Apollo White ",
      "size": "1600 x 3200",
      "thickness ": "12 mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "PDF Name": "Grasberg Exlusive 1600 x 3200 ",
      "Page No. ": "7"
    },
    {
      "title": "Arbesccato",
      "size": "1601 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "9"
    },
    {
      "title": "Calacatta Belisimo",
      "size": "1602 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "13"
    },
    {
      "title": "Patagon Stone",
      "size": "1603 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "19"
    },
    {
      "title": "Statuario Toh",
      "size": "1604 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "29",
      "image1": "Statuario Toh  F1.jpg",
      "image2": "Statuario Toh  F2.jpg",
      "image3": "Statuario Toh F1.png"
    },
    {
      "title": "Cloudy Onyx",
      "size": "1605 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "33"
    },
    {
      "title": "Estillo Onyx",
      "size": "1606 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "35"
    },
    {
      "title": "Illusion Bronze ",
      "size": "1607 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "37"
    },
    {
      "title": "Ocean Onyx",
      "size": "1608 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "39"
    },
    {
      "title": "Viola Onyx",
      "size": "1609 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "43",
      "image1": "Viola Onyx F1.jpg",
      "image2": "Viola Onyx F2.jpg",
      "image3": "Viola Onyx 3D.png"
    },
    {
      "title": "Botanic Black",
      "size": "1610 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "43"
    },
    {
      "title": "Amazonite",
      "size": "1611 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "47"
    },
    {
      "title": "Sonata Grey",
      "size": "1612 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "49",
      "image1": "Sonata Grey F1.jpg",
      "image2": "Sonata Grey F2.jpg",
      "image3": "Sonata Grey F1 3D.png"
    },
    {
      "title": "Thunder Night",
      "size": "1613 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "51",
      "image1": "Thunder Night F1.jpg",
      "image2": "Thunder Night F2.jpg",
      "image3": "Thunder Night 3D.png"
    },
    {
      "title": "Dazzle Brown",
      "size": "1614 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "55"
    },
    {
      "title": "Java Tabbaco",
      "size": "1615 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "57"
    },
    {
      "title": "Pluto Tabbaco",
      "size": "1616 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "61",
      "image1": "Pluto Tobbaco F1.jpg",
      "image2": "Pluto Tobbaco F2.jpg",
      "image3": "Pluto Tabbaco 3D.png"
    },
    {
      "title": "Java Jris",
      "size": "1617 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "63"
    },
    {
      "title": "Dazzle Nero",
      "size": "1618 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "67"
    },
    {
      "title": "Rotal Panda ",
      "size": "1619 x 3200",
      "thickness ": "12mm",
      "type ": "Speculum/Brillo",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "PDF Name": "Marakee 2.0 1600 x 3200 ",
      "Page No. ": "11"
    },
    {
      "title": "Patagonia Classic",
      "size": "1620 x 3200",
      "thickness ": "12mm",
      "type ": "Speculum/Brillo",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "15",
      "image1": "Patagonia Classic.jpg",
      "image2": "Patagonia Classic 3D.png"
    },
    {
      "title": "Onic Sea Green",
      "size": "1621 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "20"
    },
    {
      "title": "Onic Blue",
      "size": "1622 x 3200",
      "thickness ": "12mm",
      "type ": "High Gloss",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "19"
    },
    {
      "title": "Sodalite",
      "size": "1623 x 3200",
      "thickness ": "12mm",
      "type ": "Speculum/Brillo",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "PDF Name": "Marakee 1.0 1600 x 3200 ",
      "Page No. ": "42",
      "image1": "Sodalite F1.jpg",
      "image2": "Sodalite F1 3D.png"
    },
    {
      "title": "Anitco Black",
      "size": "1624 x 3200",
      "thickness ": "12mm",
      "type ": "Speculum/Brillo/Legacy",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "65"
    },
    {
      "title": "Magma Black",
      "size": "1625 x 3200",
      "thickness ": "12mm",
      "type ": "Speculum/Brillo/Legacy",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "63"
    },
    {
      "title": "Marmo Forest ",
      "size": "1626 x 3200",
      "thickness ": "12mm",
      "type ": "Speculum/Brillo/Legacy",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "70"
    },
    {
      "title": "Woodland Walnut ",
      "size": "1627 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "96",
      "image1": "WOODLAND Wallnut F1 j.jpg",
      "image3": "Woodland Wallnut.png"
    },
    {
      "title": "Teak Caster ",
      "size": "1628 x 3200",
      "thickness ": "12mm",
      "type ": "Matt",
      "Piece/box": "1",
      "inonebox": "55.12 Sq.ft",
      "Page No. ": "93",
      "image1": "Teak Caster F1.jpg",
      "image2": "Teak Caster F2.jpg",
      "image3": "Teak Caster 3D.png"
    }
  ]
  productdetaildata: any;
  sizefilter: any;
  isSticky: any;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
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
    console.log(ev,data)
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
