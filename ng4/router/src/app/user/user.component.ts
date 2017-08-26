import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  id: number;
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.paramSubscription =  this.route.params.subscribe(
      (param) => {
        this.id = param["id"];
      }
    )
  }

  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }

}
