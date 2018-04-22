import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { 
    console.log(elem);
  }

  // @Input() set appHighlight(val){  
  //   console.log(val);  
  // }
  // @HostListener("click") onclick(val){
  //   console.log(val);
  // }
}
