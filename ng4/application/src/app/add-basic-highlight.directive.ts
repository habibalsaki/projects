import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddBasicHighlight]'
})
export class AddBasicHighlightDirective implements OnInit{

  constructor(public elementRef: ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.background = 'green';
  }

}
