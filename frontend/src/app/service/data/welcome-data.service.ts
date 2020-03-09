import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
  }

  executeHalloWorldServiceWithPath(name: string): Observable<any>{
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${name}`,
    // {headers}
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username: string = 'user';
  //   let password: string = 'password';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  
  //   return basicAuthHeaderString;
  // }


}
