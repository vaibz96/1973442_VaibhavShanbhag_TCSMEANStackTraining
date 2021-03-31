import { Directive, HostListener, Input, Renderer2, ElementRef, asNativeElements } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
@Input() correctAnswer:boolean= false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onAnswered(){
    if(this.correctAnswer){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#96bb7c');
    }else{
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#c64756');
    }
    
  }

}
