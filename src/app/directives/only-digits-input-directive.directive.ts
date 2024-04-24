import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigitsInputDirective]',
  standalone: true
})
export class OnlyDigitsInputDirectiveDirective {

  constructor(private el:ElementRef) { }

 @HostListener('input', ['$input']) onInputChange(event: Event):void {
  const input = event.target as HTMLInputElement;
  const initialValue = input.value;

  const cleanedValue = initialValue.replace(/[])

  /Users/developer/Pictures/Photos Library.photoslibrary/resources/derivatives/F/FBA3FA0E-0CB9-4F59-BC3B-46CF8953670A_1_105_c.jpeg
 }

}
