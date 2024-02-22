import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showactive: any = false

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
      margin:'-29px'

    },
    {
      id:'3',
      class:'tile3',
      value:'60x20',
      active:0,
      margin:'-19px'
    },
    {
      id:'4',
      class:'tile4',
      value:'80x60',
      active:0,
      margin:'-2px'
    },
    {
      id:'5',
      class:'tile5',
      value:'20x120',
      active:0,
      margin:'5px'

    },
    {
      id:'6',
      class:'tile6',
      value:'30x60',
      active:0,
      margin:'5px'

    },
    {
      id:'7',
      class:'tile7',
      value:'140 X 60',
      active:0,
      margin:'-7px'

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
      value:'60x20',
      active:0,
      margin:'-12px'
    },
    {
      id:'4',
      class:'tile4',
      value:'80x60',
      active:0,
      margin:'-2px'
    },
    {
      id:'5',
      class:'tile5',
      value:'20x120',
      active:0,
      margin:'5px'

    },
    {
      id:'6',
      class:'tile6',
      value:'30x60',
      active:0,
      margin:'5px'

    },
    {
      id:'7',
      class:'tile7',
      value:'140 X 60',
      active:0,
      margin:'-7px'

    },
  ]

  constructor(private router:Router){
    
  }
  ngOnInit(): void {}
  openmenu(){
    this.showactive = !this.showactive
  }
}
