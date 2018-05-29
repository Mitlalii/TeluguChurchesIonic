import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RECIPES } from '../mocks/providers/mock-recipes';


@Injectable()
export class RecipesService {

  getRecipes(): Recipe[] {
      debugger;
      return RECIPES;
  } 

}