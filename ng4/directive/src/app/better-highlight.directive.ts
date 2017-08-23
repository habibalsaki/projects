import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  // many times we don't have access of DOM, for that, above approach is not a good one, we need to use Renderer2 for that


  // use HostBinding to bind property to directive
  @HostBinding('style.backgroundColor') background_color: string = 'transparent';

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { }

  ngOnInit(){
    
  }

  // use only one of HostBinding and Renderer2
  
  // use HostListener to bind event to directive
  @HostListener('mouseenter') mouseenter(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#00a9dd');
    this.background_color = '#00a9dd';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.background_color = 'transparent';
  }

}
