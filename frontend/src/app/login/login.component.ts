import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
errorMessage: string = "Invalid credentials";
invalidLogin: boolean = false;
  
constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  handleLogin(): void {
   if(this.username === 'lapa' && this.password === '123') {
    this.router.navigate(['welcome', this.username]);
     this.invalidLogin = false;
   } else {
     this.invalidLogin = true;
   }


     
  }
}
