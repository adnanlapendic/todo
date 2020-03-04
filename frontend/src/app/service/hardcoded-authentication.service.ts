import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean{    
    if(username === 'lapa' && password === '123') {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLogedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
