import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://www.allrecipes.com/thmb/nb2eEifCwlw1yc5gnXMwBy4BkXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-2x1-1193-40ded59b2a224312b66bdafbb885adc0.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another test',
      'https://www.allrecipes.com/thmb/nb2eEifCwlw1yc5gnXMwBy4BkXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-2x1-1193-40ded59b2a224312b66bdafbb885adc0.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
