import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit {

  serviceData: any = [];
  constructor(private dataService: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.dataService.onShiftPlaceGetAllData()
    .subscribe(
      res => this.serviceData = res,
      err => console.log(err)
    );
    }

    onDelete(item) {
      alert("are you sure to delete this item!");
      this.dataService.onShiftPlaceGetDelete(item.placeID)
      .subscribe(
        res => {
          
          console.log(res),
          this._router.navigate(['/Places']);
        },
        err => console.log(err)
      );
  
    }

}
