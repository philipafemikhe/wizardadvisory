export class Book{
    id:number;
    category:string;
    bookTitle:string;
    description:string;
    author:string;

    constructor(id:number=0, category:string='', bookTitle:string='', description:string='', author:string=''){
        this.id = id;
        this.category = category;
        this.bookTitle = bookTitle;
        this.description = description;
        this.author = author;
    }

}