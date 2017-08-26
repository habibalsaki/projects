import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  
  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(){
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(
      (param) => {
        console.log(param);
      }
    )

    // for reactively changed cases, we need to remove snapshots and use subscribe method
  }

  onPostLoad(){
    this.router.navigate(['/posts']); // relative paths (without slash) also works

    // for queryparams and fragments
    // this.router.navigate(['/posts'], {queryParams: {active: '1'}, fragment: 'loading'})
    
  }
}
