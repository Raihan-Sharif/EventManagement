import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
 
  catlist: any = [];

  constructor(private _DataService: DataServiceService, private _router: Router) {}




  ngOnInit() {
    this._DataService.onCategoryData()
        .subscribe(
          res => this.catlist = res,
          err => console.log(err)
        );
  }


  OnSubmit(subCategoryName, fkCategoryID) {
    var subCategory = { subCategoryName:subCategoryName.value, fkCategoryID: fkCategoryID.value}

   this._DataService.onSubCategoryCreate(subCategory).subscribe(
    res =>{ console.log(res),
      this._router.navigate(['']);},
    err => console.log(err)
   );

  }
}
