import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-category-type-details',
  templateUrl: './category-type-details.component.html',
  styleUrls: ['./category-type-details.component.scss']
})
export class CategoryTypeDetailsComponent implements OnInit {

  categoryTypeDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onCategoryTypeDatabyId(params['id'])
      .subscribe(
        res => this.categoryTypeDetails = res
      );
    });
  }
  onDelete(categoryTypeDetails) {
    alert("are you sure to delete this item!");
    this._cat.onCategoryDelete(categoryTypeDetails.categorytypeID)
    .subscribe(
      res => {
        this._router.navigate(['/CategoryType']);
        console.log(res)
      },
      err => console.log(err)
    );

  }
}
