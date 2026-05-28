import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { AdvantageTextPipe } from '../../pipes/advantage-text.pipe';

interface AdvantageItem {
  title: string;
  text: string;
}

@Component({
  selector: 'app-advantages',
  imports: [NgForOf, AdvantageTextPipe],
  templateUrl: './advantages.component.html',
})
export class AdvantagesComponent {
  @Input({ required: true }) advantages: AdvantageItem[] = [];
}
