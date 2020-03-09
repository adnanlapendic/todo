import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name: string;
welcomeMessageFromService: string;
errorMessage: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit(): void {
   this.name = this.activatedRoute.snapshot.params['name'];
  }

  getWelcomeMessage():void {
    this.service.executeHalloWorldBeanService().subscribe(response => {
      this.handleSuccessfulResponse(response);
      
    }, error =>{
      this.handleErrorResponse(error);
    });  
  }

 
   getWelcomeMessageWithParameter():void {
     this.service.executeHalloWorldServiceWithPath(this.name).subscribe(response => {
       this.handleSuccessfulResponse(response);
       
     }, error =>{
       this.handleErrorResponse(error);
     });  
   }

  handleSuccessfulResponse(response: any): void {   
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
   this.errorMessage = error.message;
  }

}
