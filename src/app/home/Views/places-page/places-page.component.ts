import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.scss', '../../../../assets/css/docs.css', '../../../../assets/css/styles.css', '../../../../assets/css/mystyle.css']
})
export class PlacesPageComponent implements OnInit {

  serviceData: any = [];
  constructor(private dataService: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.dataService.onShiftPlaceGetAllData()
      .subscribe(
        res => this.serviceData = res,
        err => console.log(err)
      );
  }

}
