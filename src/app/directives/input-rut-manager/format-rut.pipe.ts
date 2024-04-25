import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRut',
  standalone: true
})
export class FormatRutPipe implements PipeTransform {

  transform(value: string): string {
    // Lógica para formatear el RUT
    // Aquí puedes implementar la lógica específica para tu formato de RUT
    // Por ejemplo, agregar puntos y guión según el estándar chileno
    return value.replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4');
  }

}
