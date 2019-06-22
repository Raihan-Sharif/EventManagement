import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  roleData: any = [];
  constructor(private _role: DataServiceService, private _router: Router) { }

  ngOnInit() {
    this._role.onRoleData()
    .subscribe(
      res => this.roleData = res,
      err => console.log(err)
    );
  }
  onRoleDelete(item) {
    alert("are you sure to delete this item!");
    this._role.onCategoryDelete(item.id)
    .subscribe(
      res => {
        
        console.log(res),
        this._router.navigate(['/Role']);
      },
      err => console.log(err)
    );

  }

}
