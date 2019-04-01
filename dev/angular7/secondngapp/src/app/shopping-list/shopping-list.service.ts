import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Peppers', 3),
        new Ingredient('Tomatoes', 2)
    ];
    
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}
