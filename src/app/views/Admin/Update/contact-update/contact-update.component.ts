import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.scss']
})
export class ContactUpdateComponent implements OnInit {

  Contact: any = [];

  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onContactDataById(params['id'])
      .subscribe(
        res => this.Contact = res
      );
    });
  }


  OnSubmit(contactName, contactEmail,contactSubject,contactPhone,contactMessage,contactOthers,fkUserID,isRead) {
    const Id: any = this._acRoute.snapshot.params.id;
    var contact = { ContactName:contactName.value,ContactEmail:contactEmail.value,ContactSubject:contactSubject.value,ContactPhone:contactPhone.value,ContactMessage:contactMessage.value,ContactOthers:contactOthers.value,fkUserID:fkUserID.value,
      IsRead:isRead.value,ContactID:Id}


   this._cat.onContactUpdate(contact).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['/Contact/Details/'+Id]);
      
     },
     err => console.log(err)
   );
  }
}
