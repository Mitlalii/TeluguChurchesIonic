// import { Component } from "@angular/core";
// import { NavController, NavParams } from "ionic-angular";

// // import { Component } from '@angular/core';
// // import { NavController, NavParams } from 'ionic-angular';

// @Component({
//   selector: 'page-list',
//   templateUrl: 'recipes.html'
// })
// export class RecipesPage  {

//   id: string;
//   recipeName: string;
//   thumbnailImageUrl: string;
//   largeImageUrl: string;
//   totalTimeInSeconds: number;
//   rating: number;
//   numberOfServings: number;
//   ingredients: string[];

//   selectedItem: any;
//   icons: string[];
//   items: Array<{title: string, note: string, icon: string}>;

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     // If we navigated to this page, we will have an item available as a nav param
//     this.selectedItem = navParams.get('item');

//     // Let's populate this page with some filler content for funzies
//     this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
//     'american-football', 'boat', 'bluetooth', 'build'];

//     this.items = [];

//     for (let i = 1; i < 11; i++) {
//       this.items.push({
//         title: 'Item ' + i,
//         note: 'This is item #' + i,
//         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//       });
//     }
//   }

//   itemTapped(event, item) {
//     debugger;
//     // That's right, we're pushing to ourselves!
//     this.navCtrl.push(RecipesPage , {
//       item: item
//     });
//   }
// }

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../models/recipe';

import { RecipesService } from '../../providers/recipes.service';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  recipes: Recipe[];
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recipesService: RecipesService) {  
     
  } 

  ionViewDidLoad() {
    debugger;
    this.initializeRecipes();
  }
  
  initializeRecipes(): void {
    debugger;
    this.recipes = this.recipesService.getRecipes();
  } 

  onSelect(recipe: Recipe): void {
    this.navCtrl.push(RecipeDetailPage, {recipe: recipe});
  }
 
  searchRecipes(){
    // Reset recipes array back to all of the items
    this.initializeRecipes();

    // if the search term is an empty string return all items
    if (!this.searchTerm) {
      return this.recipes;
    }

    // Filter recipes
    this.recipes = this.recipes.filter((item) => {
        return item.recipeName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    }); 
  }
  
}