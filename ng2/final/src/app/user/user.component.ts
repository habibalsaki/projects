import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private tableData: any[] = [];
  constructor(private _service: UserService, private router: Router) { }

  ngOnInit() {
     this._service.getData().subscribe(data => this.tableData = data.json())
  }

  deleteUser(id: number){
    this._service.deleteUser(id).subscribe(data => this.router.navigate(['user']));
  }

}
