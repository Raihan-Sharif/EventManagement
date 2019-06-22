import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  serviceData: any = [];
  constructor(private dataService: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.dataService.onServiceGetAllData()
      .subscribe(
        res => this.serviceData = res,
        err => console.log(err)
      );
  }

  onDelete(item) {
    alert("are you sure to delete this item!");
    this.dataService.onServiceGetDelete(item.serviceID)
      .subscribe(
        res => {

          console.log(res),
            this._router.navigate(['/Services']);
        },
        err => console.log(err)
      );

  }
}

