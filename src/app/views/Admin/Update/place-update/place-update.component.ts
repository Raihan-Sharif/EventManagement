import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-place-update',
  templateUrl: './place-update.component.html',
  styleUrls: ['./place-update.component.scss']
})
export class PlaceUpdateComponent implements OnInit {

  servicesData: any [] = [];
  myImages:any [] = [];
  shiftlist:any = [];
  constructor(private _acRoute: ActivatedRoute, private _service: DataServiceService, private _router: Router) {}


  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._service.onShiftPlaceGetDatabyId(params['id'])
      .subscribe(
        res => this.servicesData = res
      );
  });
  this._service.onShiftData()
        .subscribe(
          res => this.shiftlist = res,
          err => console.log(err)
        );

  }

  getImagesinfo (e) {
      this.myImages.push(e.target.files[0]);
  }

  OnSubmit(ImageID, PlaceShiftID, PlaceID, shiftID, Offer, Price, PlaceFacility) {
    
    const frmData = new FormData();
    
      frmData.append("file", this.myImages[0]);
    frmData.append("PlaceFacility", PlaceFacility.value);
    frmData.append("Price", Price.value);
    frmData.append("PlaceOffer", Offer.value);
    frmData.append("fkPlaceID", PlaceID.value);
    frmData.append("fkShiftID", shiftID.value);
    frmData.append("IsMandatory", "false" );
    frmData.append("PlaceShiftID", PlaceShiftID.value);
    frmData.append("ImageID", ImageID.value);

   this._service.onShiftPlaceGetUpdate(frmData).subscribe(
     data => {
       console.log(data);
       this._router.navigate(['/Places']);
     }
   );
  }
}
