import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { StoreBadges } from '../../shared/store-badges';

@Component({
  selector: 'app-cta',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, StoreBadges],
  template: `
    <section id="cta" class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 appReveal>Comece a gerenciar<br>sua obra hoje.</h2>
          <p appReveal class="stagger-1">Gratuito. Simples. Para obras e reformas no Brasil.</p>
          <div appReveal class="stagger-2">
            <app-store-badges [centered]="true" />
          </div>
          <div appReveal class="cta-note stagger-3">
            <span>★</span>
            <span>4.8 nas lojas &bull; 500+ obras e reformas gerenciadas</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './cta.scss'
})
export class Cta {}
