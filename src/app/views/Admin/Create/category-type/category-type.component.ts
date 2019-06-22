import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-type',
  templateUrl: './category-type.component.html',
  styleUrls: ['./category-type.component.scss']
})
export class CategoryTypeComponent implements OnInit {

  subCategoryList: any = [];

  constructor(private _DataService: DataServiceService, private _router: Router) {}




  ngOnInit() {
    this._DataService.onSubCategoryData()
        .subscribe(
          res => this.subCategoryList = res,
          err => console.log(err)
        );
  }


  OnSubmit(categoryTypeName, categoryTypelevel,fkSubCategoryID) {
    var categoryType = { CategoryTypeName:categoryTypeName.value, CategoryTypelevel:categoryTypelevel.value,fkSubCategoryID:fkSubCategoryID.value,}

   this._DataService.onCategoryTypeCreate(categoryType).subscribe(
    res =>{ console.log(res),
      this._router.navigate(['']);},
    err => console.log(err)
   );

  }
}
