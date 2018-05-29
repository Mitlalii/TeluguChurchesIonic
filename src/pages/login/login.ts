import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data.service';


import { FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl } from '@angular/forms';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  deviceId: any;
  returnUrl: any;
  activityRightsdata: any[] = [];
  activityRights: object = {};
  userActivityRights;

  loginForm: FormGroup;
  username = new FormControl('', [Validators.required, Validators.maxLength(25), Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  pwd = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]);
  
  currentUser: any;
  constructor(private fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams,private _dataService: DataService, private toastCtrl: ToastController ) {
    debugger;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loginForm = this.fb.group({
      username: this.username,
      pwd: this.pwd,
      deviceId: this.deviceId
    });
  }

  ionViewDidLoad() {
    this.returnUrl = '/home' ;
    console.log('ionViewDidLoad LoginPage');
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
  //on login click
  login() {
    let loginUser = {
      "userName": this.loginForm.value.username,
      "password": this.loginForm.value.pwd,
      "deviceId": this.loginForm.value.deviceId
    }
    debugger
    this._dataService.Post('UserInfo/LoginUser', loginUser).subscribe(
      res => {
        if (res.userDetails == undefined) {
          this.loginForm.reset();
          this.presentToast();
        //  toastr.error(res.userDetails.endUserMessage, 'Error');
        } else if (res.userDetails.isSuccess) {
          this.initActivityRights(res.userActivityRights.listResult);
          this.loginForm.reset();
          //this.navCtrl.push(this.returnUrl);
          location.reload();
          localStorage.setItem('currentUser', JSON.stringify(res.userDetails.listResult[0]));
        } else {
          //toastr.error(res.userDetails.endUserMessage, 'Error');
          this.loginForm.reset();
        }
      },
      error => {
       
        this.loginForm.reset();
       // toastr.error('login failed', 'Error');
      }

    );
  }


    //All Activity Rights
    initActivityRights(res) {
      var uar = "";
      //comma seperated                        
      for (var i = 0; i < res.length; i++) {
        uar += res[i].id + ",";
      }
      var userActivityRights = uar.split(",")
      this.activityRights = {
        CanViewRoles: 1,
        CanManageRoles: 2,
        CanViewUsers: 3,
        CanManageUsers: 4,
        CanViewMasters: 5,
        CanManageMasters: 6,
        CanViewChurches: 7,
        CanManageChurches: 8,
        CanViewPosts: 9,
        CanManagePosts: 10,
        CanViewEvents: 11,
        CanMangeEvents: 12,
        CanViewCareers: 15,
        CanManageCareers: 16,
        CanViewShopping: 17,
        CanManageShopping: 18
  
      };
      this.userActivityRights = {
        CanViewRoles: userActivityRights.indexOf(this.activityRights["CanViewRoles"] + "") >= 0 ? true : false,
        CanManageRoles: userActivityRights.indexOf(this.activityRights["CanManageRoles"] + "") >= 0 ? true : false,
        CanViewUsers: userActivityRights.indexOf(this.activityRights["CanViewUsers"] + "") >= 0 ? true : false,
        CanManageUsers: userActivityRights.indexOf(this.activityRights["CanManageUsers"] + "") >= 0 ? true : false,
        CanViewMasters: userActivityRights.indexOf(this.activityRights["CanViewMasters"] + "") >= 0 ? true : false,
        CanManageMasters: userActivityRights.indexOf(this.activityRights["CanManageMasters"] + "") >= 0 ? true : false,
        CanViewChurches: userActivityRights.indexOf(this.activityRights["CanViewChurches"] + "") >= 0 ? true : false,
        CanManageChurches: userActivityRights.indexOf(this.activityRights["CanManageChurches"] + "") >= 0 ? true : false,
        CanViewPosts: userActivityRights.indexOf(this.activityRights["CanViewPosts"] + "") >= 0 ? true : false,
        CanManagePosts: userActivityRights.indexOf(this.activityRights["CanManagePosts"] + "") >= 0 ? true : false,
        CanViewEvents: userActivityRights.indexOf(this.activityRights["CanViewEvents"] + "") >= 0 ? true : false,
        CanMangeEvents: userActivityRights.indexOf(this.activityRights["CanMangeEvents"] + "") >= 0 ? true : false,
        CanViewCareers: userActivityRights.indexOf(this.activityRights["CanViewCareers"] + "") >= 0 ? true : false,
        CanManageCareers: userActivityRights.indexOf(this.activityRights["CanManageCareers"] + "") >= 0 ? true : false,
        CanViewShopping: userActivityRights.indexOf(this.activityRights["CanViewCareers"] + "") >= 0 ? true : false,
        CanManageShopping: userActivityRights.indexOf(this.activityRights["CanManageCareers"] + "") >= 0 ? true : false,
      }
      localStorage.setItem('UserActivityRights', JSON.stringify(this.userActivityRights));
      //this.loginRoleId=res.userDetails.listResult[0].roleId;
  
    }

    public signup() {
      debugger;
      this.navCtrl.push(SignupPage);
    }

    
}
