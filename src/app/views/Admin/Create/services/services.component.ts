import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  myImages:any [] = [];
  catname: any = [];
  catlist: any  = [];
  subcatlist: any = [];
  cattypelist: any = [];
  parking:boolean = false;
  public pId:any;
  constructor(private _service: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._service.onCategoryData()
        .subscribe(
          res => this.catlist = res,
          err => console.log(err)
        );
  }
  onChangeCategory(fkCategoryID){
    this._service.onSubCategoryDatabyCategoryId(fkCategoryID.value).subscribe(
      res => this.subcatlist = res,
          err => console.log(err)
    );
    this._service.onCategoryDatabyId(fkCategoryID.value).subscribe(
      res => this.catname = res,
      err => console.log(err)
    );
  }
  onChangesubCategory(val : any){
    this._service.onCategoryTypeDatabySubCategoryId(val).subscribe(
      res => this.cattypelist = res,
          err => console.log(err)
    );
  }
  
  getImagesinfo (e) {
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myImages.push(e.target.files[i]);
    }
  }

  OnSubmit(PackageName, Price, PackageDetails, fkCategoryTypeID, Location, Shift, Duration, Quentity, Facility, Types) {
    
    const frmData = new FormData();
    
    for (var i = 0; i < this.myImages.length; i++) { 
      frmData.append("files", this.myImages[i]);
    }
    frmData.append("PackageName", PackageName.value);
    frmData.append("Price", Price.value);
    frmData.append("ServiceLocation", Location.value);
    frmData.append("ServiceShift", Shift.value);
    frmData.append("ServiceDuration", Duration.value);
    frmData.append("ServiceQuentity", Quentity.value);
    frmData.append("ServiceFacility", Facility.value);
    frmData.append("ServiceTypes", Types.value);
    frmData.append("PackageDetails", PackageDetails.value);
    frmData.append("fkCategoryTypeID", fkCategoryTypeID.value);

   this._service.onServiceGetCreate(frmData).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['']);
     }
   );
  }
  newFunction(val){
    if (val.target.defaultValue == "true") {
      this.parking =true; 
    }
 }

  OnPlaceSubmit(PlacesName, PlacesDetails, fkCategoryTypeID, location, Capacity, Facility, Types) {
var frmData ={
      PlacesName: PlacesName.value,
       PlacesDetails : PlacesDetails.value,
        PlaceTypes:Types.value, 
        PlaceLocation:location.value,
        PlaceCapacity: Capacity.value, 
        PlaceParking: this.parking, 
        Placeinfo:Facility.value, 
        fkCategoryTypeID:fkCategoryTypeID.value
    }

   this._service.onPlaceGetCreate(frmData).subscribe(
    res => this.pId = res,

    err => console.log(err)
   );
  }
}
