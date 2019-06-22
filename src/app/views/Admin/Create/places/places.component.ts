import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  myImages:any [] = [];
  catname: any = [];
  shiftlist: any  = [];
  subcatlist: any = [];
  cattypelist: any = [];
  parking: boolean = false;
   pId: any = [];
  constructor(private _service: DataServiceService, private _router: Router) {}
  

  ngOnInit() {

    this._service.onShiftData()
        .subscribe(
          res => this.shiftlist = res,
          err => console.log(err)
        );
        this._service.onPlaceGetAllData()
        .subscribe(
          r => this.pId = r,
          err => console.log(err)
        );
  }

  getImagesinfo (e) {
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myImages.push(e.target.files[i]);
    }
  }

  OnSubmit(PlaceID, shiftID, Offer, Price, PlaceFacility) {
    
    const frmData = new FormData();
    
    for (var i = 0; i < this.myImages.length; i++) { 
      frmData.append("files", this.myImages[i]);
    }
    frmData.append("PlaceFacility", PlaceFacility.value);
    frmData.append("Price", Price.value);
    frmData.append("PlaceOffer", Offer.value);
    frmData.append("fkPlaceID", PlaceID.value);
    frmData.append("fkShiftID", shiftID.value);
    frmData.append("IsMandatory", "false" );

   this._service.onShiftPlaceGetCreate(frmData).subscribe(
     data => {
       console.log(data);
       this._router.navigate(['']);
     }
   );
  }


}
