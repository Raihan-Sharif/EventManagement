import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss','../../../../assets/css/docs.css','../../../../assets/css/mystyle.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private _DataService: DataServiceService, private _router: Router) {}




  ngOnInit() {
 
  }


  OnSubmit(contactName, contactEmail,contactSubject,contactMessage) {
    var contact = { ContactName:contactName.value,ContactEmail:contactEmail.value,ContactSubject:contactSubject.value,ContactMessage:contactMessage.value}

   this._DataService.onContactCreate(contact).subscribe(
    res =>{
      alert("Your message successfully sent :)"),
       console.log(res),
      this._router.navigate(['/Home']);},
    err => console.log(err)
   );

  }

}
