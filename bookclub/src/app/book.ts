import { Post } from "./post";
export class Book {

    id: number = 0;
    title: string='';
    author: string = '';
    img: string = '';
    summary: string='';
    link: string = '';
    pages: string = '';
    genre: string = '';
    other: string = '';

    postList: Array<Post> = [];

    // constructor(id: number =0, title: string, author: string, img: string, summary: string,
    //     link: string, pages: string, genre: string, other: string){
    //     this.id = id;
    //     this.title = title;
    //     this.author = author;
    //     this.img = img;
    //     this.summary = summary;
    //     this.link = link;
    //     this.pages = pages;
    //     this.genre = genre;
    //     this.other = other;


    // }
    // constructor(){

    // }
}