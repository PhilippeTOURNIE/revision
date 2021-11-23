import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../entities/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TODOComponent implements OnInit {

  constructor(private todoService:TodoService) { }
 
  TodoList:Todo[]=[];   

  ngOnInit(): void {
    this.todoService.getAll().subscribe((p)=>{
      // Sort by state and by last created
      p.sort((a, b) => { 
        if (a.state<b.state) return -1;
        if ( a.id >b.id && a.state==0) return -1;
        return 1;
      });
      this.TodoList =p;
    });
  }  
}
