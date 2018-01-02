import { ServerService } from './server.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  servers = [
    {
      name: 'server1',
      country: 'bangladesh'
    },
    {
      name: 'server2',
      country: 'united states'
    }
  ]

  constructor(private service: ServerService){

  }



  loadingServer(){
  
    this.service.onServerLoad(this.servers).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getServer(){
    this.service.getServers().subscribe(
      (data: any[]) => console.log(data)
    )
  }
}
