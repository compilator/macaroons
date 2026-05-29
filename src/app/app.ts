import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { CartService } from './services/cart.service';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { Product } from './models/product.model';
import { ButtonEffectsDirective } from './directives/button-effects.directive';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

interface Advantage {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgIf, FormsModule, AdvantagesComponent, ProductCardComponent, ButtonEffectsDirective, PhoneFormatPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  readonly cartService = inject(CartService);

  phone = '375293689868';
  instagramLink = 'https://www.instagram.com/';

  showPresent = true;

  menuOpen = false;
  orderProduct = '';

  advantages: Advantage[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  products: Product[] = [
    {
      image: 'images/prod1.png',
      alt: 'Макарун1',
      title: 'Макарун с малиной',
      weight: '1',
      price: 170,
    },
    {
      image: 'images/prod2.png',
      alt: 'Макарун2',
      title: 'Макарун с манго',
      weight: '1',
      price: 170,
    },
    {
      image: 'images/prod3.png',
      alt: 'Макарун3',
      title: 'Пирог с ванилью',
      weight: '1',
      price: 170,
    },
    {
      image: 'images/prod4.png',
      alt: 'Макарун4',
      title: 'Пирог с фисташками',
      weight: '1',
      price: 170,
    },
  ];

  openMenu(): void {
    this.menuOpen = true;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.closeMenu();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  get cartTotalText(): string {
    return this.cartService.total().toString();
  }

  get phoneLink(): string {
    return `tel:+${this.phone}`;
  }

  orderItem(product: Product): void {
    this.orderProduct = product.title.toUpperCase();
    alert(`${product.title} добавлен в корзину!`);
  }
}
