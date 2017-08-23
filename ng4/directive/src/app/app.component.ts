import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  booleanVal = true;
  value: number = 1000;

  @ViewChild('heading') heading;  

  ngOnInit(){
    console.log(this.heading);
  }
}
