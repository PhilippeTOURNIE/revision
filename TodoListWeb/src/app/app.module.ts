import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TODOComponent } from './todo/todo.component';
import { TododetailComponent } from './tododetail/tododetail.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoAddComponent } from './todo-add/todo-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TODOComponent,
    TododetailComponent,
    TodoAddComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
