import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe | undefined;
  constructor(private recipeSelect:RecipeService) { }

  ngOnInit() {
    
    console.log("In recipe component");
    this.recipeSelect.recipeSelected.subscribe((recipe:Recipe)=>
    {

      this.selectedRecipe=recipe;
      console.log("the selected recipe",this.selectedRecipe)

    })
  }

}
