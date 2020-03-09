import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description:string,
    public done: boolean,
    public targetDate: Date
  ) {}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos = [];
message: string;
  constructor(
    private todoDataService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
   this.refreshTodos();
  }

  deleteTodo(id: number){
    this.todoDataService.deleteTodo('lapa', id).subscribe(response => {
      this.message = `Delete of Todo ${id} Successfull!`;
      this.refreshTodos();
    });
  }

  updateTodo(id: number) {
     console.log('UPDATE');
     this.router.navigate(['todos', id]);
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('lapa').subscribe(response => {
      this.todos = response;
    });
  }

  addTodo(){
    console.log('Add Todo');
    this.router.navigate(['todos-new']);
  }

}
