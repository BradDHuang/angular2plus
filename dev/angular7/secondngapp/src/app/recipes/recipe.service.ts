import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Salsa', 'Strawberry salsa', 'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg'),
        new Recipe('Salsa2', 'Strawberry salsa', 'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg')
    ];
    
    getRecipes() {
        // return this.recipes;
        return this.recipes.slice(); // A new array.
    }
}
