import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  bngForm: FormGroup;
  constructor( private _auth: DataServiceService, private _router: Router, private fb: FormBuilder) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.bngForm = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
  loginUser () {
       this._auth.onLoggedin(this.bngForm.value)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res);
        this._router.navigate(['/dashboards']);
      },
      err => {
        console.log(err);
        this._router.navigate(['/Login']);
      }
    );
  }

}
