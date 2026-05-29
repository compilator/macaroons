import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ButtonEffectsDirective } from '../../directives/button-effects.directive';

@Component({
  selector: 'app-product-card',
  imports: [ButtonEffectsDirective, CurrencyPipe],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  private readonly cartService = inject(CartService);

  @Input({ required: true }) product!: Product;
  @Output() addedToCart = new EventEmitter<Product>();

  addToCart(): void {
    this.cartService.add(this.product.price);
    this.addedToCart.emit(this.product);
  }
}
