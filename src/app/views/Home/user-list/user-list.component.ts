import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private _user: DataServiceService, private _router: Router) { }
  userData: any = [];
  roles: any = [];
  today:Date = new Date();
  ngOnInit() {
    
    this._user.onUserData()
    .subscribe(
      res => {
        this.userData = res;
       
      },
      err => {
        // this._auth.logoutUser();
        console.log(err);
        // this._router.navigate(['/admin/login']);
      }

    );
  }
  onDelete(item) {
    this._user.onUserDelete(item.id)
    .subscribe(
      res => this._router.navigate(['/User']),
      err => console.log(err)
    );

  }

}
