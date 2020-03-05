import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHalloWorldBeanService(): Observable<any>{
    return this.http.get('http://localhost:8080/hello-world-bean')
   
  }

}
