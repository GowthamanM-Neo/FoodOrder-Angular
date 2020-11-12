import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] =[
    new Recipe('TestName','TestDescription','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('Channa Masala','Free Home Delivery','https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/chana-masala-1.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
