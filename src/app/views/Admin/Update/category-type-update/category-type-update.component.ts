import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-category-type-update',
  templateUrl: './category-type-update.component.html',
  styleUrls: ['./category-type-update.component.scss']
})
export class CategoryTypeUpdateComponent implements OnInit {


  CategoryTypeData: any = [];
  subCategoryData: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onCategoryTypeDatabyId(params['id'])
      .subscribe(
        res => this.CategoryTypeData = res
      );
    });
    this._cat.onSubCategoryData()
    .subscribe(
      res => this.subCategoryData = res,
      err => console.log(err)
    );
  }
 

  OnSubmit(categoryTypeName,categoryTypelevel,fkSubCategoryID) {
    const Id: any = this._acRoute.snapshot.params.id;
    var categoryType = {CategoryTypeName:categoryTypeName.value,CategoryTypelevel:categoryTypelevel.value,
      fkSubCategoryID:fkSubCategoryID.value,categoryTypeID:Id}

   this._cat.onCategoryTypeUpdate(categoryType).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['/CategoryType/Details/'+Id]);
      
     },
     err => console.log(err)
   );
  }


}
