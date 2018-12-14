import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  recipes: Recipe[];


  constructor(private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    console.log('Go to new recipe!');
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
