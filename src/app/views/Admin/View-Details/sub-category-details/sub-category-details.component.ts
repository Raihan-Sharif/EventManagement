import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-sub-category-details',
  templateUrl: './sub-category-details.component.html',
  styleUrls: ['./sub-category-details.component.scss']
})
export class SubCategoryDetailsComponent implements OnInit {
  subCategoryDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onSubCategoryDatabyId(params['id'])
      .subscribe(
        res => this.subCategoryDetails = res
      );
    });
  }
  onDelete(subCategoryDetails) {
    alert("are you sure to delete this item!");
    this._cat.onCategoryDelete(subCategoryDetails.subCategoryID)
    .subscribe(
      res => {
        this._router.navigate(['/dashboard']);
        console.log(res)
      },
      err => console.log(err)
    );

  }

}
