import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../user.service';
import { SpinnerService } from '../spinner.service';
import { ValidationService } from '../validation.service';

import { asyncLoginNameValidator } from '../forms-validation/asyncLoginNameValidator';
import { asyncPasswordValidator } from '../forms-validation/asyncPasswordValidator';
import { asyncNameValidator } from '../forms-validation/asyncNameValidator';
import { asyncAgeValidator } from '../forms-validation/asyncAgeValidator';
import { asyncDateOfBirthValidator } from '../forms-validation/asyncDateOfBirthValidator';
import { asyncDateOfLoginValidator } from '../forms-validation/asyncDateOfLoginValidator';
import { asyncDateOfNotifValidator } from '../forms-validation/asyncDateOfNotifValidator';
import { User } from '../../../server/api';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements DoCheck, OnInit {

  curUser: User = {
    loginName: '',
    password: '',
    name: '',
    age: '',
    dateOfBirth: '',
    dateOfLogin: '',
    dateOfNotif: '',
    info: ''
  };

  userForm!: FormGroup;

  loginNameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  nameCtrl!: FormControl;
  ageCtrl!: FormControl;
  dateOfBirthCtrl!: FormControl;
  dateOfLoginCtrl!: FormControl;
  dateOfNotifCtrl!: FormControl;

  constructor(
    private user: UserService,
    private spinner: SpinnerService,
    private validation: ValidationService
  ){}

  ngOnInit() {

    this.userForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(null,[],[
        asyncLoginNameValidator
      ]),
      'password': this.passwordCtrl = new FormControl(null,[],[
        asyncPasswordValidator
      ]),
      'name': this.nameCtrl = new FormControl(null,[],[
        asyncNameValidator
      ]),
      'age': this.ageCtrl = new FormControl(null,[],[
        asyncAgeValidator
      ]),
      'dateOfBirth': this.dateOfBirthCtrl = new FormControl(null,[],[
        asyncDateOfBirthValidator
      ]),
      'dateOfLogin': this.dateOfLoginCtrl = new FormControl(null,[],[
        asyncDateOfLoginValidator
      ]),
      'dateOfNotif': this.dateOfNotifCtrl = new FormControl(null,[],[
        asyncDateOfNotifValidator
      ]),
      'info': new FormControl()
    });
  };

  ngDoCheck() {
    if (this.loginNameCtrl.invalid && this.loginNameCtrl.dirty) {
      this.validation.defineErr(this.loginNameCtrl);
    }
    if (this.passwordCtrl.invalid && this.passwordCtrl.dirty) {
      this.validation.defineErr(this.passwordCtrl);
    }
    if (this.nameCtrl.invalid && this.nameCtrl.dirty) {
      this.validation.defineErr(this.nameCtrl);
    }
    if (this.ageCtrl.invalid && this.ageCtrl.dirty) {
      this.validation.defineErr(this.ageCtrl);
    }
    if (this.dateOfBirthCtrl.invalid && this.dateOfBirthCtrl.dirty) {
      this.validation.defineErr(this.dateOfBirthCtrl);
    }
    if (this.dateOfLoginCtrl.invalid && this.dateOfLoginCtrl.dirty) {
      this.validation.defineErr(this.dateOfLoginCtrl);
    }
    if (this.dateOfNotifCtrl.invalid && this.dateOfNotifCtrl.dirty) {
      this.validation.defineErr(this.dateOfNotifCtrl);
    }
  };

  addUser = () => {
    this.spinner.start();
    const newUser = this.user.modifyUserDataToServer(this.userForm.value);
    this.user.addUser(newUser)
      .subscribe( () => {
        this.spinner.stop();
        this.ngOnInit();
      });
  };

}
