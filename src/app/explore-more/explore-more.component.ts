import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-more',
  templateUrl: './explore-more.component.html',
  styleUrls: ['./explore-more.component.scss']
})
export class ExploreMoreComponent implements OnInit {

  boxfilter:any = [
    {
      width:'30px',
      height:'30px',
      value:'30 x 30'
    },
    {
      width:'60px',
      height:'60px',
      value:'60 x 60'
    },
    {
      width:'60px',
      height:'120px',
      value:'60 x 20'
    },
    {
      width:'120px',
      height:'220px',
      value:'160 x 320'
    },
    {
      width:'80px',
      height:'120px',
      value:'60 x 60'
    },
    {
      width:'20px',
      height:'120px',
      value:'20 x 120'
    },
    {
      width:'30px',
      height:'60px',
      value:'30 x 60'
    }
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

  constructor(){

  }
  ngOnInit(): void {}

  opensidebar(){
    this.showfilter = !this.showfilter
  }

}
