// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
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
  
}
