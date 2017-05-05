import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleFormService {

  constructor(private http: Http) { }

  getMakes(): Observable<any[]>{
    return this.http.get('/api/makes').map(data => data.json());
  }

  getFeatures(): Observable<any[]>{
    return this.http.get('/api/features').map(data => data.json());
  }

}
