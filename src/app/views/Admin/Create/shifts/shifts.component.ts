import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {


  constructor(private _DataService: DataServiceService, private _router: Router) {}




  ngOnInit() {
 
  }


  OnSubmit(shiftName, timeinfo) {
    var Shift = { ShiftName:shiftName.value, timeinfo:timeinfo.value}

   this._DataService.onShiftCreate(Shift).subscribe(
    res =>{ console.log(res),
      this._router.navigate(['/Shift']);},
    err => console.log(err)
   );

  }
}
