import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {


  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {

  }

  storeRecipes() {
    // const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Blabla token42342341^&^&')

    // return this.httpClient.put('https://angular-recipe-app-23208.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });

    const req = new HttpRequest(
      'PUT',
      'https://angular-recipe-app-23208.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      // { reportProgress: true, params: new HttpParams().set('auth', token) })
      { reportProgress: true })

    return this.httpClient.request(req)
  }

  getRecipes() {
    // const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://angular-recipe-app-23208.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://angular-recipe-app-23208.firebaseio.com/recipes.json', {
      observe: 'response',
      // params: new HttpParams().set('auth', token),
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (let recipe of recipes.body) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes) => {
          this.recipeService.setRecipes(recipes.body);
        }
      );
  }
}
