import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-type-list',
  templateUrl: './category-type-list.component.html',
  styleUrls: ['./category-type-list.component.scss']
})
export class CategoryTypeListComponent implements OnInit {

  categoryTypeData: any = [];
  constructor(private dataService: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.dataService.onCategoryTypeDataByName()
    .subscribe(
      res => this.categoryTypeData = res,
      err => console.log(err)
    );


  }

  onDelete(item) {
    alert("are you sure to delete this item!");
    this.dataService.onCategoryTypeDelete(item.categoryTypeID)
    .subscribe(
      res => {
        
        console.log(res),
        this._router.navigate(['/CategoryType']);
      },
      err => console.log(err)
    );

  }
}
