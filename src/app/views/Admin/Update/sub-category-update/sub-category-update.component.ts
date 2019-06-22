import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-sub-category-update',
  templateUrl: './sub-category-update.component.html',
  styleUrls: ['./sub-category-update.component.scss']
})
export class SubCategoryUpdateComponent implements OnInit {



  subCategory: any = [];
  categoryData: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onSubCategoryDatabyId(params['id'])
      .subscribe(
        res => this.subCategory = res
      );
    });
    this._cat.onCategoryData()
    .subscribe(
      res => this.categoryData = res,
      err => console.log(err)
    );
  }
  // find categoryName from categoryId

  OnSubmit(subCategoryName,fkCategoryID) {
    const Id: any = this._acRoute.snapshot.params.id;
    var subCategory = {subCategoryName:subCategoryName.value,fkCategoryID:fkCategoryID.value,subCategoryID:Id}

   this._cat.onSubCategoryUpdate(subCategory).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['/Category']);
      
     },
     err => console.log(err)
   );
  }

}

