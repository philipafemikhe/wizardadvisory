import { Injectable } from '@angular/core';
import { Book } from '../models/book'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  selectedBooks: Book[] = [];
  public books: Book[] = [];
  selectedBook:any = null;

  getBooksInCategory(category:string): Book[] {
    this.selectedBooks = [];
    console.log("category: " + category);
    for(var i=0; i < this.books.length; i++){
      console.log("this.books[i].category " + this.books[i].category);
      if(this.books[i].category === category) this.selectedBooks.push(this.books[i]);
    }
    return this.selectedBooks
  }
  

  constructor() {
    let book:Book =new Book(1,'Category1',"Book1 Title","Book 1 Description", "Author2");
    this.books.push(book);
    book = new Book(2,'Category2',"Book2","Description", "Author1");
    this.books.push(book);

    // this.selectedBooks = this.books;
     
   }

   createBook(book:Book){
     book.id = this.books.length+1;
     this.books.push(book);
    this.selectedBook=book;
   }

  getBooks(): Book[]{
    return this.books;
  }

  getCount():number{
    return this.books.length;
  }

}
