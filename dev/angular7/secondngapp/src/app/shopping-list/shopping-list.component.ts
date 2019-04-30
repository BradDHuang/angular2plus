import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from './shopping-list.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
// export class ShoppingListComponent implements OnInit {
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // this.shoppingListService.ingredientsChanged
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  
  // onIngredientAdded(ing: Ingredient) {
  //   this.ingredients.push(ing);
  // }
  
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
