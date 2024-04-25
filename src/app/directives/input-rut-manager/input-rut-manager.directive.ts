import { Directive, ElementRef, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormatRutPipe } from '../input-rut-manager/format-rut.pipe';

@Directive({
  selector: '[appInputRutManager]',
})
export class InputRutManagerDirective {
@Input() isOk = false;
@Output() isOkChange = new EventEmitter<boolean>();
@Input() value = '';

private inputElement!: HTMLInputElement;

private formatRutPipe = new FormatRutPipe();

constructor(private elementRef:ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngonchanges (changes: SimpleChanges): void {
    // console. log( 'phone changes', changes)
    this.validateInputRut()
  }

  public validateRut(rut:string):boolean {
    if (rut.length<=1) return false;

    // Formato esperado: XXXXXXXX-Y
    const rutRegex = /^(\d{1,8})-(\d|K)$/;

    if (!rutRegex.test(rut)) {
      return false; // El formato del RUT no es válido
    }

    const [numeros, digitoVerificador] = rut.split('-');
    const caracteres = Array.from(numeros).reverse();
    let suma = 0;
    let multiplicador = 2;

    for (const caracter of caracteres) {
      suma += parseInt(caracter) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const digitoCalculado = 11 - resto;

    if (digitoCalculado === 11) {
      return digitoVerificador === '0';
    } else if (digitoCalculado === 10) {
      return digitoVerificador.toUpperCase() === 'K';
    } else {
      return parseInt(digitoVerificador) === digitoCalculado;
    }
  }

  public validateInputRut() {
    const rutInput = this.inputElement.value;
    this.inputElement.value = this.formatRutPipe.transform(rutInput);
    this.isOkChange.emit(this.validateRut(this.inputElement.value))
  }
}
