import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private route: ActivatedRoute){
    
  }

  
}
