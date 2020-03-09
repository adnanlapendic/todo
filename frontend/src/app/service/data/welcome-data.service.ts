import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class HelloWorldBean {
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHalloWorldBeanService(): Observable<any>{
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  executeHalloWorldServiceWithPath(name: string): Observable<any>{
    return this.http.get<HelloWorldBean>(`http://localhost:8080//hello-world/path-variable/${name}`);
  }



}
