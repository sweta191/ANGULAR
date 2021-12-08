import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {
  
  recipe:any;
    
  
  
  constructor(private recipeSelect:RecipeService) {
    
   }

  ngOnInit() {
    
    this.recipe=this.recipeSelect.getDetails();
    console.log("In the list component",this.recipe)
  }

}
