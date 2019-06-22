import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  serviceDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _service: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._service.onServiceGetDatabyId(params['id'])
      .subscribe(
        res => this.serviceDetails = res
      );
    });
  }
  onDelete(serviceDetails) {
    alert("are you sure to delete this item!");
    this._service.onServiceGetDelete(serviceDetails.serviceID)
    .subscribe(
      res => {
        this._router.navigate(['/Services']);
        console.log(res)
      },
      err => console.log(err)
    );

  }
}
