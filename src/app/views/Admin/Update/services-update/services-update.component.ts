import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-services-update',
  templateUrl: './services-update.component.html',
  styleUrls: ['./services-update.component.scss']
})
export class ServicesUpdateComponent implements OnInit {
  servicesData: any = [];
  catlist: any = [];
  subcatlist: any = [];
  cattypelist: any = [];
  myImages:any [] = [];
  constructor(private _acRoute: ActivatedRoute, private _service: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._service.onServiceGetDatabyId(params['id'])
      .subscribe(
        res => this.servicesData = res,
        err => console.log(err)
      );      
    });

    this._service.onCategoryData()
      .subscribe(
        res => this.catlist = res,
        err => console.log(err)
      );
  }

  // same from create
  onChangeCategory(fkCategoryID){
    this._service.onSubCategoryDatabyCategoryId(fkCategoryID.value).subscribe(
      res => this.subcatlist = res,
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
    
      this.myImages.push(e.target.files[0]);
    
  }

  OnSubmit(packageName, price, packageDetails, fkCategoryTypeID, serviceLocation, serviceShift, serviceDuration, serviceQuentity, serviceFacility, serviceTypes, ImageID) {
    const Id: any = this._acRoute.snapshot.params.id;
    const frmData = new FormData();   
    frmData.append("file", this.myImages[0]);
    frmData.append("ServiceID", Id);
    frmData.append("PackageName", packageName.value);
    frmData.append("Price", price.value);
    frmData.append("ServiceLocation", serviceLocation.value);
    frmData.append("ServiceShift", serviceShift.value);
    frmData.append("ServiceDuration", serviceDuration.value);
    frmData.append("ServiceQuentity", serviceQuentity.value);
    frmData.append("ServiceFacility", serviceFacility.value);
    frmData.append("ServiceTypes", serviceTypes.value);
    frmData.append("PackageDetails", packageDetails.value);
    frmData.append("fkCategoryTypeID", fkCategoryTypeID.value);
    frmData.append("ImageID", ImageID.value);

   this._service.onServiceGetUpdate(frmData).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['/Services']);
     }
   );
  }
}
