import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];  // + in front of numbers is a shortcut for translating the 'id' to number, because we know we will get it as string
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );

  }

  sendIngredients() {
    this.recipeService.sendIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.activeRoute });         OR >>>>
    console.log('Go to recipe edit');
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activeRoute });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
