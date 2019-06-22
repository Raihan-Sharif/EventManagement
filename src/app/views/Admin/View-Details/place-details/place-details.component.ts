import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {
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

  onDelete(placeDetails) {
    alert("are you sure to delete this item!");
    this._service.onShiftPlaceGetDelete(placeDetails.placeShiftID)
    .subscribe(
      res => {
        this._router.navigate(['/Services']);
        console.log(res)
      },
      err => console.log(err)
    );

  }

}
