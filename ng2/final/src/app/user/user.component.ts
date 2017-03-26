import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private userList: any;
  constructor(private _service: UserService) { }

  ngOnInit() {
    this._service.getUsers().subscribe(res => {
      this.userList = res.json();
    });
  }

}
