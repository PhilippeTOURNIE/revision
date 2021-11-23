import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TODOComponent } from './todo/todo.component';
import { TododetailComponent } from './tododetail/tododetail.component';

const routes: Routes = [
  {  
    path:"todo",
    component:TODOComponent,
  },  
  {  
    path:"detail/:num",
    component:TododetailComponent,
  },
  {  
    path:"todoadd",
    component:TodoAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
