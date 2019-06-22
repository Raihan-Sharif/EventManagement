import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.scss']
})
export class ShiftDetailsComponent implements OnInit {

  ShiftDetails: any = [];
  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onShiftDataById(params['id'])
      .subscribe(
        res => this.ShiftDetails = res
      );
    });
  }
  onDelete(ShiftDetails) {
    alert("are you sure to delete this item!");
    this._cat.onShiftDelete(ShiftDetails.shiftID)
    .subscribe(
      res => {
        this._router.navigate(['/Shift']);
        console.log(res)
      },
      err => console.log(err)
    );

  }

}
