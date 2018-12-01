import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe!', 'Test description', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629@2x.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddRecipe() {
    this.recipes.push(new Recipe('A test recipe!', 'Test description', 'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629@2x.jpg'));
  }

}
