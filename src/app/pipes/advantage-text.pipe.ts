import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advantageText',
})
export class AdvantageTextPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    if (value.length <= 95) {
      return value;
    }

    return `${value.slice(0, 95)}...`;
  }
}
