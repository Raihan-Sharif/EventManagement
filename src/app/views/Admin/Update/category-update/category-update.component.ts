import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {



  category: any = [];

  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onCategoryDatabyId(params['id'])
      .subscribe(
        res => this.category = res
      );
    });
  }


  OnSubmit(categoryName) {
    const Id: any = this._acRoute.snapshot.params.id;
    var category = {categoryName:categoryName.value,categoryID:Id}

    // const formData: FormData = new FormData();
    // formData.append('categoryName',categoryName.value)

   this._cat.onCategoryUpdate(category).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['/Category']);
      
     },
     err => console.log(err)
   );
  }
 

}
