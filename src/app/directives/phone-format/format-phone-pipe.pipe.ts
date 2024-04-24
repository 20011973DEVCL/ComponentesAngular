import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhonePipe',
  standalone: true
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    // Lógica para formatear el número de teléfono
    // Aquí puedes implementar la lógica específica para tu formato de teléfono
    // Por ejemplo, agregar paréntesis, guiones, etc.
    return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

}
