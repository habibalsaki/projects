import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';

  customSubscription: Subscription;

  ngOnInit(){
    const observable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('1st chunk arrived');
      }, 2000);

      setTimeout(() => {
        observer.next('2nd chunk arrived');
      }, 4000);

      setTimeout(() => {
        //observer.error('error happened');
        observer.complete();
      }, 5000);

    });

    this.customSubscription =  observable.subscribe(
      (data) => {console.log(data); },
      (err) => { console.log(err); },
      () => {console.log('completed')}
    )
  }

  ngOnDestroy(){
    this.customSubscription.unsubscribe();
  }
}
