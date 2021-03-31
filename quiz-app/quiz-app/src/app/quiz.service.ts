import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor( public http:HttpClient ) { }

  fetchValue():Observable<Quiz[]>{
    return this.http.get<Quiz[]>("http://localhost:3000/quizzes");
  }
}
