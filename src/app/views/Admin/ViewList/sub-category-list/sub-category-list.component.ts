import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit {
  subCategoryData: any = [];
  constructor(private dataService: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.dataService.onSubCategoryDataByName()
    .subscribe(
      res => this.subCategoryData = res,
      err => console.log(err)
    );


  }

  onDelete(item) {
    alert("are you sure to delete this item!");
    this.dataService.onSubCategoryDelete(item.subCategoryID)
    .subscribe(
      res => {
        
        console.log(res),
        this._router.navigate(['/SubCategory']);
      },
      err => console.log(err)
    );

  }
}
