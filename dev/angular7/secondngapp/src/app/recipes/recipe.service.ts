import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Salsa', 'Strawberry salsa', 'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg',
                   [
                       new Ingredient('Strawberry', 6),
                       new Ingredient('Onion', 4)
                   ]
        ),
        new Recipe('Spicy-Salsa', 'Pepper salsa', 'https://www.gimmesomeoven.com/wp-content/uploads/2017/05/Restaurant-Style-Salsa-Recipe-5.jpg',
                   [
                       new Ingredient('Green Pepper', 3),
                       new Ingredient('Red Pepper', 8)
                   ]
        )
    ];
    
    recipeSelected = new EventEmitter<Recipe>();
    
    constructor(private shoppingListService: ShoppingListService) {}
    
    getRecipes() {
        // return this.recipes;
        return this.recipes.slice(); // A new array.
    }
    
    addIngToSL(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
    }
    
}
