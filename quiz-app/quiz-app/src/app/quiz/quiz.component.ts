import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz:Array<Quiz> = [];
  counter = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result:string= "";
  
  constructor(public quizSer: QuizService) { }

  ngOnInit(): void {
    this.quizSer.fetchValue().subscribe(result=>this.quiz=result, error=>console.log(error));
  }

  onAnswer( option: boolean){
    this.answerSelected = true;
    setTimeout(() =>{
      this.counter++;
      this.answerSelected = false;
    }, 3000)
    
    if(option){
      this.correctAnswers++
    }else{
      this.incorrectAnswers++;
    }

    if(this.correctAnswers >=6){
      this.result = "Passed";
    }else{
      this.result = "Failed";
    }

  }
}
