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
  ngOnInit(): void {
  }

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
   
    this.service.createuserdata(data).subscribe((res:any) => {
      this.getalldata()
    })
  }

  deleteitem(data:any){
    this.service.deleteuser({id:data}).subscribe((res:any) => {
      this.getalldata()
    })
  }

  insertdata(){
      const productdata:any = [{"title":"Apollo White ","size":"1600 x 3200","thickness ":"12 mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"7","avtar_portrait":"Apollo White F1/Apollo White F1.jpg","mockup":"Apollo White F1/160x320 Mockup Images-01.jpg","tilted_view":"Apollo White F1/Apollo White.png"},{"title":"Arbesccato","size":"1601 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"9","avtar_portrait":"Arbesccato F1/Arbesccato F1.jpg","mockup":"Arbesccato F1/160x320 Mockup Images-05.jpg","tilted_view":"Arbesccato F1/Arbesccato 3D F1.png"},{"title":"Calacatta Belisimo","size":"1602 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"13","avtar_portrait":"Calacatta Belisimo F1/Calacatta Belisimo F1.jpg","tilted_view":"Calacatta Belisimo F1/Calacatta Belisimo F1 3D.png"},{"title":"Patagon Stone","size":"1603 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"19","avtar_portrait":"Patagon Stone F1/PATAGON STONE F1.jpg","tilted_view":"Patagon Stone F1/Patagon Stone 3D.png"},{"title":"Statuario Toh","size":"1604 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"29","avtar_portrait":"Statuario Toh  F1.jpg","mockup":"Statuario Toh  F2.jpg","banner2":"Statuario Toh F1.png"},{"title":"Cloudy Onyx","size":"1605 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"33","avtar_portrait":"Cloudy Onyx F1/Cloudy Onyx F1.jpg","mockup":"Cloudy Onyx F1/160x320 Mockup Images-13.jpg","tilted_view":"Cloudy Onyx F1/Cloudy Onyx F1 3D.png"},{"title":"Estillo Onyx","size":"1606 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"35","avtar_portrait":"Estillo Onyx F1/Estillo Onyx F1.jpg","mockup":"Estillo Onyx F1/160x320 Mockup Images-17.jpg","tilted_view":"Estillo Onyx F1/Estillo Onyx F1 3D.png"},{"title":"Illusion Bronze ","size":"1607 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"37","avtar_portrait":"Illusion Broze/Illusion Bronze F1.jpg","mockup":"Illusion Broze/160x320 Mockup Images-02.jpg","tilted_view":"Illusion Broze/Illusion Bronze 3D F1.png"},{"title":"Ocean Onyx","size":"1608 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"39","avtar_portrait":"Oceano Onyx/Oceano Onyx F1.jpg","mockup":"Oceano Onyx/160x320 Mockup Images-06.jpg","tilted_view":"Oceano Onyx/Oxeano Onyx 3D.png"},{"title":"Viola Onyx","size":"1609 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"43","avtar_portrait":"Viola Onyx/Viola Onyx F1.jpg","mockup":"Viola Onyx/160x320 Mockup Images-10.jpg","banner2":"Viola Onyx 3D.png","tilted_view":"Viola Onyx/Viola Onyx 3D.png"},{"title":"Botanic Black","size":"1610 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"43","avtar_portrait":"Botanica Black f1/Botanic Black F1.jpg","tilted_view":"Botanica Black f1/Botanica Black F1.png"},{"title":"Amazonite","size":"1611 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"47","avtar_portrait":"Amazonite/AMAZONITE F1.jpg","mockup":"Amazonite/160x320 Mockup Images-18.jpg"},{"title":"Sonata Grey","size":"1612 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"49","avtar_portrait":"Sonata Grey/Sonata Grey F1.jpg","mockup":"Sonata Grey/160x320 Mockup Images-03.jpg","tilted_view":"Sonata Grey/Sonata Grey F1 3D.png"},{"title":"Thunder Night","size":"1613 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"51","avtar_portrait":"Thunder Night/Thunder Night F1.jpg","tilted_view":"Thunder Night/Thunder Night 3D.png"},{"title":"Dazzle Brown","size":"1614 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"55","avtar_portrait":"Dazzle Brown/Dazzle Brown F1.jpg","mockup":"Dazzle Brown/Dazzle Brown-19.jpg","tilted_view":"Dazzle Brown/Dazzle Brown F1.png"},{"title":"Java Tabbaco","size":"1615 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"57","avtar_portrait":"Java Tabbaco/Java Tobbaco F1.jpg","tilted_view":"Java Tabbaco/Java Tabbaco.png"},{"title":"Pluto Tabbaco","size":"1616 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"61","avtar_portrait":"Pluto Tabbaco/Pluto Tobbaco F1.jpg","mockup":"Pluto Tabbaco/160x320 Mockup Images-07.jpg","tilted_view":"Pluto Tabbaco/Pluto Tabbaco 3D.png"},{"title":"Java Gris","size":"1617 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"63","avtar_portrait":"Java Gris F1/JAVA GRIS F1.jpg","mockup":"Java Gris F1/160x320 Mockup Images-11.jpg","tilted_view":"Java Gris F1/Java Gris F1 3D.png"},{"title":"Dazzle Nero","size":"1618 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"67","avtar_portrait":"Java Tabbaco/Java Tobbaco F1.jpg","tilted_view":"Java Tabbaco/Java Tabbaco.png"},{"title":"Royal Panda ","size":"1619 x 3200","thickness ":"12mm","type ":"Speculum/Brillo","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"11","avtar_portrait":"Royal Panda/Royal Panda.jpg","tilted_view":"Royal Panda/Royal Panda 3D.png"},{"title":"Patagonia Classic","size":"1620 x 3200","thickness ":"12mm","type ":"Speculum/Brillo","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"15","avtar_portrait":"Patagonia Classic/Patagonia Classic.jpg","tilted_view":"Patagonia Classic/Patagonia Classic 3D.png"},{"title":"Onice Sea Green","size":"1621 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"20","avtar_portrait":"Onice Sea Green F1/Onice Sea green F1.jpg","tilted_view":"Onice Sea Green F1/Onice Sea Green F2 3D.png"},{"title":"Onice Blue","size":"1622 x 3200","thickness ":"12mm","type ":"High Gloss","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"19","avtar_portrait":"Onice Blue F1/Onice Blue F1.jpg","tilted_view":"Onice Blue F1/Onice Blue F1 3D.png"},{"title":"Sodalite","size":"1623 x 3200","thickness ":"12mm","type ":"Speculum/Brillo","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"42","avtar_portrait":"Sodalite F1/Sodalite F1.jpg","tilted_view":"Sodalite F1/Sodalite F1 3D.png"},{"title":"Anitco Black","size":"1624 x 3200","thickness ":"12mm","type ":"Speculum/Brillo/Legacy","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"65","avtar_portrait":"Antico Balck F1/Antico Black F1.jpg","tilted_view":"Antico Balck F1/Antico Black f1.png"},{"title":"Magma Black","size":"1625 x 3200","thickness ":"12mm","type ":"Speculum/Brillo/Legacy","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"63","avtar_portrait":"Magma Black/Magma Black.jpg","tilted_view":"Magma Black/Magma Black 3D.png"},{"title":"Marmo Forest ","size":"1626 x 3200","thickness ":"12mm","type ":"Speculum/Brillo/Legacy","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"70","avtar_portrait":"Marmo Forest/Marmo Forest F1.jpg","tilted_view":"Marmo Forest/Marmo Forest F1 3D.png"},{"title":"Woodland Walnut ","size":"1627 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"96","avtar_portrait":"Woodland Wallnut/WOODLAND Wallnut F1 j.jpg","tilted_view":"Woodland Wallnut/Woodland Wallnut.png"},{"title":"Teak Caster ","size":"1628 x 3200","thickness ":"12mm","type ":"Matt","Piece/box":"1","inonebox":"55.12 Sq.ft","Page No. ":"93","avtar_portrait":"Teak Caster F1/Teak Caster F1.jpg","tilted_view":"Teak Caster F1/Teak Caster 3D.png"}]
    
      console.log({"title":"Apollo White ","size":"1600 x 3200","thickness":"12 mm","type":"High Gloss","inonebox":"55.12 Sq.ft","avtarportrait":"Apollo White F1/Apollo White F1.jpg","mockup":"Apollo White F1/160x320 Mockup Images-01.jpg","tiltedview":"Apollo White F1/Apollo White.png"},'data')
      productdata.forEach((res:any) => {
        this.createuser(res)

      })
  }

}
