import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DataService } from "../../providers/data.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  currentUser: any;
  banners: any[];
  TotalCount :any;
  filterInfo: Object = {};
  CategoryInfo: any;

  constructor(public navCtrl: NavController,public dataService:DataService) {
   //  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this.filterInfo["userId"] = 0;
     this.filterInfo["pageIndex"] = 1;
     this.filterInfo["pageSize"] = 14;
     this.filterInfo["sortbyColumnName"] = 'UpdatedDate';
     this.filterInfo["sortDirection"] = 'desc';
  }

  ionViewDidLoad() {
    debugger;
    this.LoadImages();
    this.loadCategory();
  }

  LoadImages() {
    debugger;
    this.banners=[];
    this.dataService.Post("Banners/GetAllBanners",this.filterInfo).subscribe((data) => {
     debugger;
     if (data.isSuccess && data.totalRecords >= 1) {
      this.TotalCount = data.totalRecords;
      this.banners = data.listResult;
      localStorage.setItem('itm', JSON.stringify(this.TotalCount));
    }
    });

  }

  loadCategory() {
    debugger
    this.dataService.Get("Category/GetCategoryById", null).subscribe(
      (responceData: any) => {
        debugger;
        if (responceData.isSuccess) {

          this.CategoryInfo = responceData.listResult;
          localStorage.setItem('categoryName', JSON.stringify(this.CategoryInfo));

        }
        // else {
        //   toastr.error(responceData.endUserMessage, 'Error');
        // }
      },
    );
  }


}
