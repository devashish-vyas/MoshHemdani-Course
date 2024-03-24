import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormatDirective]',
  standalone : true
})
export class InputFormatDirectiveDirective {

  constructor(private el : ElementRef){

  }

  @HostListener('focus') onFocus(){
    console.log("Worked on Focus");
  }

  @HostListener('blur') onBlur(){
    console.log('Blurred');
    let value : string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();

  }



}
