import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appValidateInputDateDirective]',
  standalone: true
})
export class ValidateInputDateDirectiveDirective {
@Input()  separator = '/';
@Input()  isOk = false;
@Output() isOkChange = new EventEmitter<boolean>();
private inputElement!: HTMLInputElement;

  constructor(
    @Self() private ngControl:NgControl,
    private elementRef:ElementRef) {
      this.inputElement = this.elementRef.nativeElement;
     }

     @HostListener('input',['$event'])
     onChange(event:any) {
        this.permitirSoloNumerosYslash();
     }

     private permitirSoloNumerosYslash() {
      let newVal = this.inputElement.value.replace(/[^0-9\/]/g, '');
      this.inputElement.value = newVal;
     }

}
