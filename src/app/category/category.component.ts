import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:Category = new Category();
  categoryList: Category[];
  id:number = 0;

  onSubmit() {
    console.log("Title: " + this.category.categoryTitle + " escr: " + this.category.description);
    this.category.id = this.id;
    this.categoryService
    .createCategory(this.category); 
    this.getCategoryList();
    this.category = new Category();
  }

  deleteCategory(id:number){}

  updateCategory(id:number){}


  getCategoryList(){
    this.categoryList = this.categoryService.getCategories();
    for(var i=0; i <= this.categoryList.length-1; i++){
      console.log("id" + this.categoryList[i]['id']);
      console.log("Title" + this.categoryList[i]['categoryTitle']);
      console.log("Description" + this.categoryList[i]['description']);


    }
  }
  constructor(private categoryService: CategoryService) { 
    this.categoryList = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategoryList();
    this.id = 9; //this.categoryService.getCount() + 1;
  }


  

}
