import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService) {} 
    
    storeRecipes() {
        return this.http.put('https://ng-recipes-d1765.firebaseio.com/recipes.json',
                      this.recipeService.getRecipes()
        );
    }
    
    getRecipes() {
        this.http.get('https://ng-recipes-d1765.firebaseio.com/recipes.json')
            .pipe(map(
                (res: Response) => {
                    const recipes: Recipe[] = res.json();
                    // check if there is an ingredients prop.
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            // console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            ))
            .subscribe(
                (recipes: Recipe[]) => {
                    // const recipes: Recipe[] = res.json();
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
    
}
