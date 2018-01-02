import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  onServerLoad(servers: any){
    return this.http.post('https://ng-test-68046.firebaseio.com/data.json', servers);
  }

  getServers(){
    return this.http.get('https://ng-test-68046.firebaseio.com/data.json').map(
      (res: Response) => {
      
        const data = res.json();
        return data;
      }
    );
  }

}
