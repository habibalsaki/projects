import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddBasicHighlight]' // directive for attribute
})
export class AddBasicHighlightDirective implements OnInit{

  // directives are of two types, attribute directive and structural directive
  constructor(public elementRef: ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.background = 'green'; // using ElementRef for directive element access, accessing DOM

    // many times we don't have access of DOM, for that, above approach is not a good one, we need to use Renderer2 for that
  }

}
