import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'app/data-service.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {

  roleForm: FormGroup;
  constructor(private _role: DataServiceService,private _router: Router, private fb: FormBuilder) {
    // this.createForm(); 
  }
  ngOnInit() {
  }
  // createForm() {
  //   this.roleForm = this.fb.group({
  //      roleName: ['', Validators.required ],
  //   });
  // }

  onCreate(Name) {
    const frmData = new FormData();
    frmData.append("Name", Name.value);

    this._role.onRoleCreate(frmData)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        );
    this._router.navigate(['/Role']);

}

}
