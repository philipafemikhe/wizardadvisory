export class Category{
    id:number;
    categoryTitle:string;
    description:string;

    constructor(id:number=0, categoryTitle:string='', description:string=''){
        this.id = id;
        this.categoryTitle = categoryTitle;
        this.description = description;
    }
}