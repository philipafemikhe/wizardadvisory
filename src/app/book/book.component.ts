import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Category } from '../models/category';
import { BookService } from '../services/book.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:Book = new Book();
  bookList: Book[];
  categories:Category[];
  id:number = 0;
  photo:string = '';

  onSubmit() {
    console.log("Title: " + this.book.bookTitle + " escr: " + this.book.description);
    this.book.id = this.id;
    this.bookService
    .createBook(this.book); 
    this.getBookList();
    this.book = new Book();
  }

  deleteBook(id:number){}

  updateBook(id:number){}


  getBookList(){
    this.bookList = this.bookService.getBooks();
    for(var i=0; i <= this.bookList.length-1; i++){
      console.log("id" + this.bookList[i]['id']);
      console.log("Title" + this.bookList[i]['bookTitle']);
      console.log("Category" + this.bookList[i]['category']);


    }
  }
  constructor(private bookService: BookService, private categoryService:CategoryService) { 
    this.bookList = this.bookService.getBooks();
    this.categories = this.categoryService.getCategories();

  }

  ngOnInit(): void {
    this.getBookList();
    this.id = 9; //this.bookService.getCount() + 1;
  }

  setBookId(){
    
  }

}
