import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(1,'',false, new Date());

    if(this.id){
      this.todoService.retrieveTodo('lapa', this.id).subscribe(response => {
        this.todo = response;
      });
    }
  }

  saveTodo(){
    if(this.id) {
          this.todoService.updateTodo('lapa', this.id, this.todo).subscribe(response => {
          console.log(response);
          this.router.navigate(['todos']);
      });
    } else {
      this.todoService.saveTodo('lapa', this.todo).subscribe(response => {
        console.log(response);
        this.router.navigate(['todos']);
      });
    }
  }




  
}
