import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigitsInputDirective]',
})
export class OnlyDigitsInputDirectiveDirective {

  constructor(private el:ElementRef) { }

 @HostListener('input', ['$input']) onInputChange(event: Event):void {
  const input = event.target as HTMLInputElement;
  const initialValue = input.value;

  // Limpiar cualquier caracter que no sea numero
  const cleanedValue = initialValue.replace(/[^0-9]/g, '');

  // Si el valor limpio no es igual al valor original, establece el valor del campo de entrada
  if (cleanedValue !== initialValue) {
    input.value = cleanedValue;
    input.dispatchEvent(new Event('input'));
  }
 }
}
