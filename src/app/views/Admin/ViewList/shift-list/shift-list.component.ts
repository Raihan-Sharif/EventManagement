import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {

  shiftData: any = [];
  constructor(private ShiftData: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this.ShiftData.onShiftData()
    .subscribe(
      res => this.shiftData = res,
      err => console.log(err)
    );
  }
  onDelete(item) {
    alert("are you sure to delete this item!");
    this.ShiftData.onShiftDelete(item.shiftID)
    .subscribe(
      res => {
        
        console.log(res),
        this._router.navigate(['/Shift']);
      },
      err => console.log(err)
    );

  }

}
