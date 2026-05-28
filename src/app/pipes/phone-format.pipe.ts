import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value || value.length !== 12) {
      return value ?? '';
    }

    const country = value.slice(0, 3);
    const code = value.slice(3, 5);
    const first = value.slice(5, 8);
    const second = value.slice(8, 10);
    const third = value.slice(10, 12);

    return `+${country} (${code}) ${first}-${second}-${third}`;
  }
}
