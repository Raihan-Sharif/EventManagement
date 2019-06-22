import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {

  constructor(private _DataService: DataServiceService, private _router: Router) {}




  ngOnInit() {
 
  }


  OnSubmit(contactName, contactEmail,contactSubject,contactPhone,contactMessage,contactOthers,fkUserID,isRead) {
    var contact = { ContactName:contactName.value,ContactEmail:contactEmail.value,ContactSubject:contactSubject.value,ContactPhone:contactPhone.value,ContactMessage:contactMessage.value,ContactOthers:contactOthers.value,fkUserID:fkUserID.value,
    IsRead:isRead.value}

   this._DataService.onContactCreate(contact).subscribe(
    res =>{ console.log(res),
      this._router.navigate(['/Contact']);},
    err => console.log(err)
   );

  }

}
