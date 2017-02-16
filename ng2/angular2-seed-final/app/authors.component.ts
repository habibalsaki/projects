import { Component, OnInit } from '@angular/core';
import { AuthorService } from './authors.service'; 

@Component({
    moduleId: module.id,
    selector: 'author',
    template: `
        <h3>{{title}}</h3>
        <ul>
            <li *ngFor="let author of authors">
                {{author}}
            </li>
        </ul>
    `
})
export class AuthorsComponent implements OnInit {
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }

    ngOnInit() { }

    title = "Authors";
    authors;
}