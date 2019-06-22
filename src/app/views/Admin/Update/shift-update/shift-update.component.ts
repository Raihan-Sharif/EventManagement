import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-shift-update',
  templateUrl: './shift-update.component.html',
  styleUrls: ['./shift-update.component.scss']
})
export class ShiftUpdateComponent implements OnInit {

  Shift: any = [];

  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onShiftDataById(params['id'])
      .subscribe(
        res => this.Shift = res
      );
    });
  }


  OnSubmit(shiftName,timeinfo) {
    const Id: any = this._acRoute.snapshot.params.id;
    var shift = {ShiftName:shiftName.value,timeinfo:timeinfo.value,shiftID:Id}


   this._cat.onShiftUpdate(shift).subscribe(
     data => {
       console.log('done');
       this._router.navigate(['/Shift/Details/'+Id]);
      
     },
     err => console.log(err)
   );
  }
 
}
