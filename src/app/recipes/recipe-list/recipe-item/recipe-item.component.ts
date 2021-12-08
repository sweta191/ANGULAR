import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.modal';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:any;
 
 
  constructor(private recipeSelect:RecipeService ) { }

  ngOnInit() {
  }
  OnclickItem()
 {
   this.recipeSelect.recipeSelected.emit(this.recipe);
   console.log("the itm",this.recipe);
   
 }
  
}
