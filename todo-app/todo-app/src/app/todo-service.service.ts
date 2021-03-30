import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(public http:HttpClient) { }

  storeValue(todo:any){
    this.http.post("http://localhost:3000/todo-list", todo).
    subscribe(result=>console.log(result), error=>console.log(error));
    
  }

  fetchValue():Observable<ToDo[]>{
    return this.http.get<ToDo[]>("http://localhost:3000/todo-list");
  }
}
