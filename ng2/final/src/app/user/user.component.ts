import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private tableData: any[] = [];
  constructor(private _service: UserService) { }

  ngOnInit() {
     this._service.getData().subscribe(data => this.tableData = data.json())
  }

}
