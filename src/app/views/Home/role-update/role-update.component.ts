import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.scss']
})
export class RoleUpdateComponent implements OnInit {

 

  role: any = [];

  constructor(private _acRoute: ActivatedRoute, private _cat: DataServiceService, private _router: Router) {}

  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._cat.onRoleDatabyId(params['id'])
      .subscribe(
        res => this.role = res
      );
    });
  }


  OnSubmit(name) {
    const Id: any = this._acRoute.snapshot.params.id;
    var Rol = {Name:name.value,Id:Id}
   this._cat.onRoleUpdate(Rol).subscribe(
     data => {
       console.log(data);
       this._router.navigate(['/Role']);
      
     },
     err => console.log(err)
   );
  }
 



}
