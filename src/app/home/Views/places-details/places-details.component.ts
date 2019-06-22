import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.component.html',
  styleUrls: ['./places-details.component.scss','../../../../assets/css/docs.css','../../../../assets/css/styles.css','../../../../assets/css/mystyle.css']
})
export class PlacesDetailsComponent implements OnInit {

  placeDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _service: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._service.onShiftPlaceGetDatabyId(params['id'])
      .subscribe(
        res => this.placeDetails = res
      );
    });
  }
  totalPrice: number = this.placeDetails.price * this.placeDetails.serviceQuentity;
}
