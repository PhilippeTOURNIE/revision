import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Todo } from '../entities/todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  // current Todo
  public model:Todo=new Todo(); 

  // current key
  public id:number=-1;

  // current state
  currentState:number=0;

  constructor(private route:ActivatedRoute,private todoService:TodoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (map:ParamMap):void=>{
        const num = map.get("num");
        if (num!=null){
          this.id = parseInt(num);
          this.todoService.getById(this.id).subscribe((p)=>{ 
            if(p)
              this.model = p; 
              this.currentState=p!.state
            });                 
        }
    });
  }

  save(){
    // detect user modification
      // modify model and save it to the backend
      this.model.state = this.currentState?1:0;
      this.todoService.update(this.model)
    }
}
