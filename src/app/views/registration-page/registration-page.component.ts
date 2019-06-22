import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  ungForm: FormGroup;
  constructor(private _user: DataServiceService, private _router: Router, private fb: FormBuilder) {this.createForm(); }
 ngOnInit() {  }

  createForm() {
    this.ungForm = this.fb.group({
       firstName: ['', Validators.required ],
       lastName: ['', Validators.required ],
       userName: ['', Validators.required ],
       email: ['', Validators.required],
       phoneNumber: [''],
       password: ['', Validators.required ],
       confirmPassword: ['', Validators.required ]
    });
  }
  onCreate() {

      this._user.onUserCreate(this.ungForm.value)
          .subscribe(
            res =>  this._router.navigate(['/Login']),
            err => console.log(err)
          );
  }

}
