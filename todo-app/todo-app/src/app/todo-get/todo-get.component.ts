import { Component, OnInit } from '@angular/core';
import { ToDo } from "../todo.model";
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-get',
  templateUrl: './todo-get.component.html',
  styleUrls: ['./todo-get.component.css']
})
export class TodoGetComponent implements OnInit {

  todo:Array<ToDo>=[];

  constructor(public todoSer: TodoServiceService) { }

  ngOnInit(): void {
    this.todoSer.fetchValue().subscribe(result=>this.todo=result, error=>(console.log(error)));
  }

  dataSource = this.todo;

}


