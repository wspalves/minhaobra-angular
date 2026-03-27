import { Directive, ElementRef, inject, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' }
})
export class RevealDirective {
  private el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('revealed');
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '-40px' }
      );
      obs.observe(this.el.nativeElement);
    });
  }
}
