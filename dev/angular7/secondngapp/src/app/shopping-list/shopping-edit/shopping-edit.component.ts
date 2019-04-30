// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  @ViewChild('f') slForm: NgForm;
  
  subscription: Subscription;
  editMode = false;
  editedItemIdx: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIdx = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }  
      );
  }

  // onAddItem() {
  onAddItem(form: NgForm) {
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    // const newIng = new Ingredient(name, amount);
    const newIng = new Ingredient(value.name, value.amount);
    // this.ingredientAdded.emit(newIng);
    this.shoppingListService.addIngredient(newIng);
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
