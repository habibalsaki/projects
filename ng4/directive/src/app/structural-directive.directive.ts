import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective {

  @Input() set appStructuralDirective(value: Boolean) { // this property name must be same as selector name
    if(!value){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  // templateRef is what 
  // viewContainerRef is where
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
