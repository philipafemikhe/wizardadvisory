import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  books:Book[];
  categories: Category[];

  constructor(private bookService: BookService, private categoryService:CategoryService) {
    this.categories = categoryService.getCategories();
    this.books = bookService.getBooks(); //  bookService.getBooksInCategory(this.categories[0].categoryTitle);
   }

  ngOnInit(): void {
  }

  loadBooksIncategory(category:string){
    this.books = this.bookService.getBooksInCategory(category);
  }

  loadAll(){
    this.books = [];
    this.books = this.bookService.getBooks();
  }
}
