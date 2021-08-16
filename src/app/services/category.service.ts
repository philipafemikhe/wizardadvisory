import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categories: Category[] = [];

  selectedCategory:any = null;

  constructor() {
    let category:Category =new Category(1,"Category1","Category1 Description");
    this.categories.push(category);
    category = new Category(2,"Category2","Category2 Description");
    this.categories.push(category);
     
   }

   createCategory(category:Category){
     category.id = this.categories.length+1;
     this.categories.push(category);
    this.selectedCategory=category;
   }

  getCategories(): Category[]{
    return this.categories;
  }

  getCount():number{
    return this.categories.length;
  }
}
