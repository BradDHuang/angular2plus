import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Salsa', 'Strawberry salsa', 'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg'),
    new Recipe('Salsa2', 'Strawberry salsa', 'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
