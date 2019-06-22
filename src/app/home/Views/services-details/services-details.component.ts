import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss','../../../../assets/css/docs.css','../../../../assets/css/styles.css','../../../../assets/css/mystyle.css']
})
export class ServicesDetailsComponent implements OnInit {

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
  totalPrice: number = this.serviceDetails.price * this.serviceDetails.serviceQuentity;
}
