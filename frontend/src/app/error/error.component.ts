import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
errorMessage: string = "404 Page don't exist. An Error Ocurred. Contact Support at *******"
  constructor() { }

  ngOnInit(): void {
  }

}
