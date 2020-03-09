import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

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
  
constructor(
  private router: Router,
  private hardcodedAuthenticationService: HardcodedAuthenticationService,
  private basicAuthenticationService: BasicAuthenticationService

  ) { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  // handleLogin(): void {
  //  if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
  //   this.router.navigate(['welcome', this.username]);
  //    this.invalidLogin = false;
  //  } else {
  //    this.invalidLogin = true;
  //  }


     
  // }


  handleBasicAuthLogin(): void {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password).subscribe(response => {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }, error => {
      console.log(error);
      
      this.invalidLogin = true;
    }); 
   }

}
