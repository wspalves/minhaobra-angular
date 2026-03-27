import { Component, ChangeDetectionStrategy, ElementRef, inject, afterNextRender, signal } from '@angular/core';

interface Stat {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  isFloat?: boolean;
}

@Component({
  selector: 'app-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="stats">
      <div class="container stats-grid">
        @for (stat of statsDef; track stat.label; let i = $index) {
          <div class="stat-item">
            <div class="stat-value">
              {{ stat.prefix ?? '' }}{{ displayValues()[i] }}{{ stat.suffix }}
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './stats.scss'
})
export class Stats {
  private el = inject(ElementRef);

  statsDef: Stat[] = [
    { target: 500, suffix: '+', label: 'Obras e reformas' },
    { target: 2000, suffix: '+', label: 'Etapas concluídas' },
    { target: 15, prefix: 'R$ ', suffix: 'M+', label: 'Em custos rastreados' },
    { target: 4.8, suffix: ' ★', label: 'Nota nas lojas', isFloat: true }
  ];

  displayValues = signal(['0', '0', '0', '0.0']);

  constructor() {
    afterNextRender(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.animate();
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(this.el.nativeElement);
    });
  }

  private animate() {
    const duration = 2500;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic

      this.displayValues.set(
        this.statsDef.map(s => {
          const v = s.target * ease;
          return s.isFloat ? v.toFixed(1) : Math.floor(v).toString();
        })
      );

      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}
