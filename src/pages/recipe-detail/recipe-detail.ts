// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the RecipeDetailPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-recipe-detail',
//   templateUrl: 'recipe-detail.html',
// })
// export class RecipeDetailPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad RecipeDetailPage');
//   }

// }

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html'
})
export class RecipeDetailPage {

  recipe: Recipe;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
      this.recipe = this.navParams.get("recipe");
  }
}