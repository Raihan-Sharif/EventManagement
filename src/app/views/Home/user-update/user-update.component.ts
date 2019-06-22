import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  userData: any [] = [];
  myImages:any [] = [];
  constructor(private _acRoute: ActivatedRoute, private _service: DataServiceService, private _router: Router) {}


  ngOnInit() {
    this._acRoute.params.subscribe(params => {
      this._service.onUserDatabyId(params['id'])
      .subscribe(
        res => this.userData = res
      );
  });

  }

  getImagesinfo (e) {
      this.myImages.push(e.target.files[0]);
  }

  OnSubmit(Id, firstName, lastName, email, phoneNumber, password, confirmPassword, city, address, nID) {
    
    const frmData = new FormData();
    
    frmData.append("file", this.myImages[0]);
    frmData.append("Id", Id.value);
    frmData.append("FirstName", firstName.value);
    frmData.append("LastName", lastName.value);
    frmData.append("Email", email.value);
    frmData.append("PhoneNumber", phoneNumber.value);
    frmData.append("Password", password.value);
    frmData.append("ConfirmPassword", confirmPassword.value);
    frmData.append("City", city.value );
    frmData.append("Address", address.value);
    frmData.append("NID", nID.value);

   this._service.onUserUpdate(frmData).subscribe(
     data => {
       console.log(data);
       this._router.navigate(['/User']);
     }
   );
  }

}
