import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly count = signal(0);
  readonly total = signal(0);

  add(price: number): void {
    this.count.update((value) => value + 1);
    this.total.update((value) => value + price);
  }
}
