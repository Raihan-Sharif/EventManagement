import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

categoryDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onCategoryDatabyId(params['id'])
      .subscribe(
        res => this.categoryDetails = res
      );
    });
  }
  onDelete(categoryDetails) {
    alert("are you sure to delete this item!");
    this._cat.onCategoryDelete(categoryDetails.categoryID)
    .subscribe(
      res => {
        this._router.navigate(['/dashboard']);
        console.log(res)
      },
      err => console.log(err)
    );

  }

}
