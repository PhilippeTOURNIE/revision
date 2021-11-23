import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Todo } from '../entities/todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup = 
   new FormGroup({
    title: new FormControl(''),
  });

  saving = false;
  submitted = false;
  erreur : string="";

  constructor(    
    private formBuilder: FormBuilder,
    private todoService:TodoService) {

     }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required], 
      description:['']     
    });
  }
  
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.todoForm.invalid) {
      return;
    }
    
    // save
    this.saving = true;
    let model:Todo = new Todo();
    model.title = this.todoForm.value['title']
    model.detail = this.todoForm.value['description']
    this.todoService.create(model);
    this.erreur = '';
    this.saving = false;

  }

  // controls accessor 
  get checks() { return this.todoForm.controls; }

}
