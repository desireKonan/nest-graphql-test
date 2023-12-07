import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {
        id: "Id1",
        title: "New Recipe input",
        description: "New Description",
        ingredients: [
            "Onions", "Tomatos"
        ],
        creationDate: new Date(Date.now())
    } as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {
        id: "Id1",
        title: "New Recipe input",
        description: "New Description",
        ingredients: [
            "Onions", "Tomatos"
        ],
        creationDate: new Date(Date.now())
    } as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {

    var recipes : Recipe[] = [
        {
            id: "Id1",
            title: "New Recipe input",
            description: "New Description",
            ingredients: [
                "Onions", "Tomatos"
            ],
            creationDate: new Date(Date.now())
        },
        {
            id: "Id2",
            title: "New Recipe input 2",
            description: "New Description 2",
            ingredients: [
                "Onions", "Tomatos"
            ],
            creationDate: new Date(Date.now())
        }
    ];
    return recipes;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}