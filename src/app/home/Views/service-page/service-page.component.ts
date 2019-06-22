import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss', '../../../../assets/css/docs.css', '../../../../assets/css/styles.css', '../../../../assets/css/mystyle.css']
})
export class ServicePageComponent implements OnInit {

  serviceData: any = [];
  constructor(private dataService: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.dataService.onServiceGetAllData()
      .subscribe(
        res => this.serviceData = res,
        err => console.log(err)
      );
  }
}
