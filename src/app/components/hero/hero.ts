import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StoreBadges } from '../../shared/store-badges';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoreBadges],
  template: `
    <section id="hero" class="hero">
      <!-- Background -->
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format&fit=crop"
          alt="Obra e reforma residencial"
          loading="eager"
        />
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-grid">
        <!-- Text content -->
        <div class="hero-text">
          <div class="hero-badge anim-1">
            <span>Gestão de Obras e Reformas</span>
          </div>

          <h1 class="anim-2">
            Sua obra na <span class="highlight">palma da mão.</span>
          </h1>

          <p class="hero-subtitle anim-3">
            Acompanhe etapas, controle custos e gerencie sua equipe —
            tudo em um único app.
          </p>

          <div class="anim-4">
            <app-store-badges />
          </div>
        </div>

        <!-- Floating widget -->
        <div class="hero-widget anim-widget">
          <div class="widget-header">
            <div class="widget-icon">🏗️</div>
            <div>
              <h3>Casa em Ibiti</h3>
              <p>Etapa: Alvenaria &bull; 47%</p>
            </div>
          </div>

          <div class="widget-bar">
            <div class="widget-bar-fill"></div>
          </div>

          <button class="widget-link">
            <span>Abrir no app</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.scss'
})
export class Hero {}
