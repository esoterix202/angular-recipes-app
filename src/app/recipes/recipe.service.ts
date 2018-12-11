import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'The Healthy Plate',
      'Test description',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629@2x.jpg', [
        new Ingredient('Carrots', 7),
        new Ingredient('Spinach', 2),
        new Ingredient('Salt', 1),
      ]),

    new Recipe(
      'The Italian Night',
      'Test description',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg', [
        new Ingredient('Pasta', 200),
        new Ingredient('Oil', 0.5),
        new Ingredient('Salt', 11),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(i: number, newRecipe: Recipe) {
    this.recipes[i] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
