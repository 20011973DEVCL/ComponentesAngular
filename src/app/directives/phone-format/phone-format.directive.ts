import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, SimpleChanges } from '@angular/core';
import { FormatPhonePipe } from './format-phone-pipe.pipe';

@Directive({
  selector: '[appPhoneFormat]',
  standalone: true
})
export class PhoneFormatDirective {
  @Input () isOkPhone = false;
  @Output () isOkPhoneChange = new EventEmitter<boolean>();
  regExp = /\+56 9 [0-9]{4} [0-9]{4}/g;

  private inputElement: HTMLInputElement;
  private formatPhonePipe = new FormatPhonePipe();

  constructor (private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnChanges (changes: SimpleChanges): void {
  // console. log('phone changes', changes)
    this.validatePhone();
  }

  validatePhone() {
    let valueInput = this.inputElement.value;
    valueInput = this.formatPhonePipe.transform(valueInput);

    this.isOkPhone = !!valueInput.match(this.regExp);
    this.isOkPhoneChange.emit(this.isOkPhone);

    this.inputElement.value = valueInput;
  }

  @HostListener('input', ['$input'])
  onInput(event: Event) {
    this.validatePhone();
  }

}
