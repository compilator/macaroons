import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonEffects]',
})
export class ButtonEffectsDirective implements OnInit {
  @Input() defaultBackground = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverBackground = 'linear-gradient(90deg, rgb(95, 6, 25) 0%, rgb(235, 95, 116) 100%)';

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.setBackground(this.defaultBackground);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBackground(this.hoverBackground);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBackground(this.defaultBackground);
  }

  private setBackground(background: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', background);
  }
}
