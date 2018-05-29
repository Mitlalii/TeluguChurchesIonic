import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginPage } from '../login/login';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

  data: any;
  validatePasswordConfirmation: any;

  regiForm: FormGroup;
  firstName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[a-zA-Z_-\\s]*')]);
  lastname = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[a-zA-Z_-\\s]*')]);
  middleName = new FormControl('', [Validators.maxLength(50), Validators.pattern('[a-zA-Z_-\\s]*')]);
  mobileNumber = new FormControl('', [Validators.required, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(13), Validators.pattern('[0-9]*')])]);
  userName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  email = new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern('^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]);
  confirmpassword = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private _dataService: DataService, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ngOnInit() {
    this.regiForm = this.fb.group({
      id: 0,
      userId: "",
      firstName: this.firstName,
      lastName: this.lastname,
      middleName: this.middleName,
      mobileNumber: this.mobileNumber,
      userName: this.userName,
      password: this.password,
      confirmpassword: this.confirmpassword,
      roleId: 3,
      email: this.email,
      isActive: true,
      createdByUserId: null,
      createdDate: new Date(),
      updatedByUserId: null,
      updatedDate: new Date(),
      deviceId: null,
    },
      { validator: this.checkIfMatchingPasswords('password', 'confirmpassword') });
  }
  // compare password and confirmpassword
  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  // Executed When Form Is Submitted
  onFormSubmit() {
    debugger
    this.data = this.regiForm.value;
    var req = {
      "imageString": null,
      "id": 0,
      "userId": "",
      "firstName": this.data.firstName,
      "lastname": this.data.lastName,
      "middleName": this.data.middleName,
      "mobileNumber": this.data.mobileNumber,
      "genderTypeId": "",
      "dob": "",
      "userName": this.data.userName,
      "password": this.data.password,
      "roleId": 3,
      "email": this.data.email,
      "fileLocation": "",
      "fileName": "",
      "fileExtention": "",
      "isActive": true,
      "createdByUserId": null,
      "createdDate": new Date(),
      "updatedByUserId": null,
      "updatedDate": new Date(),
      "description": "",
      "deviceId": this.data.deviceId,

    }
    this._dataService.Post('Account/Register', req).subscribe(
      res => {
        debugger;
        if (res.isSuccess) {
          this.presentToast();
          this.regiForm.reset();
          this.navCtrl.push(LoginPage);
        } else {
          // toastr.error(res.endUserMessage, 'Error');
        }
      },
      error => {
        // toastr.error(error.endUserMessage, 'Error');
      }
    );
  }

  login() {
    this.navCtrl.push(LoginPage);
  }
}
