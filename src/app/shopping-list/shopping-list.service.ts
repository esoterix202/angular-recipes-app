import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for ( let ingredient of ingredients ) {
    //   this.addIngredient(ingredient);
    // }    --good solution, but emitting a lot of events

    this.ingredients.push(...ingredients);
    console.log(this.ingredients.slice());
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
