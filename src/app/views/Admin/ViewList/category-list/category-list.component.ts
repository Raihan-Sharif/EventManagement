import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryData: any = [];
  constructor(private CategoryData: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.CategoryData.onCategoryData()
    .subscribe(
      res => this.categoryData = res,
      err => console.log(err)
    );
  }
  onDelete(item) {
    alert("are you sure to delete this item!");
    this.CategoryData.onCategoryDelete(item.categoryID)
    .subscribe(
      res => {
        
        console.log(res),
        this._router.navigate(['/Category']);
      },
      err => console.log(err)
    );

  }
}
