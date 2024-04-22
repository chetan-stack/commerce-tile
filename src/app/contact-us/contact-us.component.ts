import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(){

  }

  emailsend(data:any){
    console.log('data')
    if(data.invalid){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Filled All Mandatory Feilds",
      });
    }
    else{
     
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "we have recieved your query. We will get back to you shortly",
      });
    }
  }

}
