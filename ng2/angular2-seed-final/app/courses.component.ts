import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    moduleId: module.id,
    selector: 'courses',
    template: `<h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
    `
})
export class CoursesComponent implements OnInit {

    constructor(coursesService: CoursesService){
        this.courses = coursesService.getCourses();
    }
    ngOnInit() { }

    title = "welcome to the title";
    courses;
}
