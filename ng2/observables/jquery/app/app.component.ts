/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ControlGroup, FormBuilder} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: ``
})
export class AppComponent {
    
    constructor(fb: FormBuilder){
        
        var startDates = [];
        var startDate = new Date();

        for(var day = -2; day <=2 ;day++){
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }

        Observable.fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date " + date);
                return [1,2,3];
            })
            .subscribe(x => console.log(x));
    }
}