import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  constructor(private _categorydata: DataServiceService,private _router: Router, private fb: FormBuilder) {this.createForm(); }
  ngOnInit() {
  }
  createForm() {
    this.categoryForm = this.fb.group({
       categoryName: ['', Validators.required ],
    });
  }

  onCreate() {

    this._categorydata.onCategoryCreate(this.categoryForm.value)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        );
    this._router.navigate(['/Category']);

}
}
