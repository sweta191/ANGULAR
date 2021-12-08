import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.modal';
export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>()
   private recipe:Recipe[]=[
        new Recipe("poha","flat rice","https://presscs.com/wp-content/uploads/2017/05/Poha-Recipe.jpg")
        ,new Recipe("poha","flat rice","https://presscs.com/wp-content/uploads/2017/05/Poha-Recipe.jpg")
    
      ]
  getDetails()
  {
      return this.recipe.slice();
  }

}