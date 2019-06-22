import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactData: any = [];
  constructor(private Data: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.Data.onContactData()
    .subscribe(
      res => this.contactData = res,
      err => console.log(err)
    );
  }
  onDelete(item) {
    alert("are you sure to delete this item!");
    this.Data.onContactDelete(item.contactID)
    .subscribe(
      res => {
        
        console.log(res),
        this._router.navigate(['/Contact']);
      },
      err => console.log(err)
    );

  }

}
