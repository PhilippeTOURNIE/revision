import { Injectable } from '@angular/core';
import { Todo } from './entities/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private client:HttpClient) { }

  // get all record from api
  public getAll():Observable<Todo[]>{
    return this.client.get<Todo[]>(environment.TodoUrl + 'Todo');    
  }

  public getById(id:number):Observable<Todo |null> {

    return this.getAll()
    .pipe( // lié un observable
      map( // ajouter un traitement
        (todos:Todo[]): Todo|null =>{
        for (let index = 0; index < todos.length; index++) {
          const current =todos[index];
          if (current.id== id)
            return current;
        }
        return null;
      }
      )
    );
  }

  // save record on the api
  update(model: Todo) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const body =JSON.stringify(model);
    this.client.put<Todo>(environment.TodoUrl + 'Todo/'+model.id,body,httpOptions).subscribe(
      data=> {alert("New state recorded"); console.debug(data)},
      error => {
        alert("Failed to save : "+ error)
      }
      );
  }

  create(model: Todo):boolean {
    let ok:boolean=false;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const body =JSON.stringify(model);
    this.client.post<Todo>(environment.TodoUrl + 'Todo/',body,httpOptions).subscribe(
      data=> {
        ok=true; 
        alert("New Todo recorded"); 
        console.debug(data)},
      error => {
        ok=false;
        alert("Failed to create : "+ error)
      }
      );
      return ok;
  }

}
