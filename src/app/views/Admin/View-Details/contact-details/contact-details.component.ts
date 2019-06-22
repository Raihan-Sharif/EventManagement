import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  ContactDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onContactDataById(params['id'])
      .subscribe(
        res => this.ContactDetails = res
      );
    });
  }
  onDelete(contactDetails) {
    alert("are you sure to delete this item!");
    this._cat.onContactDelete(contactDetails.contactID)
    .subscribe(
      res => {
        this._router.navigate(['/Contact']);
        console.log(res)
      },
      err => console.log(err)
    );

  }
}
