import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-post',
  templateUrl: './todo-post.component.html',
  styleUrls: ['./todo-post.component.css']
})
export class TodoPostComponent implements OnInit {

  constructor(public todoSer: TodoServiceService) { }

  ngOnInit(): void {
  }

  storeUserTodo(todoRef:any){
    console.log(todoRef);
    this.todoSer.storeValue(todoRef);
  }

}
