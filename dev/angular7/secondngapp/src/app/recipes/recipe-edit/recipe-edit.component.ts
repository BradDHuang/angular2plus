import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = + params['id'];
          this.editMode = params['id'] != null; // check if there is an id or not.
          // console.log(params['id'], this.editMode);
          
          this.initForm();
        }
      );
  }
  
  private initForm() {
    let recipeName = '';
    let recipeImgP = '';
    let recipeDesc = '';
    
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgP = recipe.imagePath;
      recipeDesc = recipe.description;
    }
    
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgPath': new FormControl(recipeImgP),
      'description': new FormControl(recipeDesc)
    });
  }
  
  onSubmit() {
    console.log(this.recipeForm);
  }

}
