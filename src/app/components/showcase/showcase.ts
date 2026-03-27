import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="showcase" class="showcase">
      <div class="container">
        <div appReveal class="section-header">
          <h2>Veja o Reformei em ação</h2>
          <p>Interface intuitiva, feita para quem constrói e não quer complicações.</p>
        </div>
      </div>

      <!-- ── iPhone ── -->
      <div class="device-row-label" appReveal>
        <span class="device-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="3"/><circle cx="12" cy="18.5" r="0.75" fill="currentColor"/></svg>
        </span>
        <span>iPhone</span>
      </div>

      <div class="phones-scroll hide-scrollbar">
        <div class="phones-grid">
          <div appReveal class="phone-col stagger-1">
            <div class="phone">
              <img
                src="images/home-reformei.png"
                alt="Tela inicial do Reformei mostrando visão geral da obra"
                class="phone-screenshot"
              />
            </div>
            <div class="phone-caption">
              <h4>Visão geral da obra</h4>
              <p>Acompanhe tudo em um só lugar</p>
            </div>
          </div>

          <div appReveal class="phone-col stagger-2">
            <div class="phone">
              <img
                src="images/stages-reformei.png"
                alt="Tela de etapas do Reformei com cronograma detalhado"
                class="phone-screenshot"
              />
            </div>
            <div class="phone-caption">
              <h4>Etapas detalhadas</h4>
              <p>Organize cada fase da construção</p>
            </div>
          </div>

          <div appReveal class="phone-col stagger-3">
            <div class="phone">
              <img
                src="images/expenses-reformei.png"
                alt="Tela de controle de custos do Reformei"
                class="phone-screenshot"
              />
            </div>
            <div class="phone-caption">
              <h4>Controle financeiro</h4>
              <p>Saiba para onde vai cada real</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── iPad ── -->
      <div class="device-row-label device-row-label--ipad" appReveal>
        <span class="device-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="2" width="18" height="20" rx="3"/><circle cx="12" cy="18.75" r="0.75" fill="currentColor"/></svg>
        </span>
        <span>iPad</span>
      </div>

      <div class="phones-scroll hide-scrollbar">
        <div class="phones-grid">
          <div appReveal class="phone-col stagger-1">
            <div class="ipad">
              <div class="ipad-camera"></div>
              <img
                src="images/home-ipad-reformei.png"
                alt="Tela inicial do Reformei no iPad mostrando visão geral da obra"
                class="phone-screenshot"
              />
            </div>
            <div class="phone-caption">
              <h4>Visão geral da obra</h4>
              <p>Acompanhe tudo em um só lugar</p>
            </div>
          </div>

          <div appReveal class="phone-col stagger-2">
            <div class="ipad">
              <div class="ipad-camera"></div>
              <img
                src="images/stages-ipad-reformei.png"
                alt="Tela de etapas do Reformei no iPad"
                class="phone-screenshot"
              />
            </div>
            <div class="phone-caption">
              <h4>Etapas detalhadas</h4>
              <p>Organize cada fase da construção</p>
            </div>
          </div>

          <div appReveal class="phone-col stagger-3">
            <div class="ipad">
              <div class="ipad-camera"></div>
              <img
                src="images/expenses-ipad-reformei.png"
                alt="Tela de custos do Reformei no iPad"
                class="phone-screenshot"
              />
            </div>
            <div class="phone-caption">
              <h4>Controle financeiro</h4>
              <p>Saiba para onde vai cada real</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  `,
  styleUrl: './showcase.scss'
})
export class Showcase {}
