import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';

export const TOKKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKKEN);
    }
}

  isUserLogedIn(): boolean {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKKEN);
  }

  executeAuthenticationService(username: string, password: string): Observable<any>{
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(`
    ${API_URL}/basicauth`,
    {headers}).pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        sessionStorage.setItem(TOKKEN, basicAuthHeaderString);
        return data;
      })
    );
  }
}

export class AuthenticationBean {
  constructor(public message: string){}
}
