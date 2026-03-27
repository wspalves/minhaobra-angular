import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="funcionalidades" class="features">
      <div class="container">
        <div appReveal class="section-header">
          <h2>Tudo que você precisa para gerenciar sua obra ou reforma</h2>
          <p>Do planejamento à entrega das chaves, ferramentas simples para quem não tem tempo a perder.</p>
        </div>

        <div class="features-grid">
          @for (feat of features; track feat.title; let i = $index) {
            <div appReveal [class]="'feature-card stagger-' + (i + 1)">
              <div class="feature-icon" [style.background]="feat.bg" [style.color]="feat.color">
                <svg [attr.width]="28" [attr.height]="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" [innerHTML]="feat.svgPath">
                </svg>
              </div>
              <h3>{{ feat.title }}</h3>
              <p>{{ feat.desc }}</p>
              <div class="feature-footer">
                <span>Saiba mais</span>
                <div class="feature-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './features.scss'
})
export class Features {
  features = [
    {
      title: 'Etapas & Cronograma',
      desc: 'Divida sua obra ou reforma em etapas claras. Acompanhe o progresso de cada fase com fotos, anotações e cronograma atualizado.',
      color: '#3B82F6',
      bg: 'rgba(59, 130, 246, 0.1)',
      svgPath: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>'
    },
    {
      title: 'Controle de Custos',
      desc: 'Registre despesas por etapa e categoria. Visualize seus gastos com gráficos e saiba exatamente para onde está indo cada real.',
      color: '#F97316',
      bg: 'rgba(249, 115, 22, 0.1)',
      svgPath: '<path d="M21 12V7H5a2 2 0 010-4h14v4"/><path d="M3 5v14a2 2 0 002 2h16v-5"/><path d="M18 12a2 2 0 000 4h4v-4z"/>'
    },
    {
      title: 'Equipe & Colaboração',
      desc: 'Convide arquitetos, engenheiros e profissionais. Controle permissões para que cada membro veja apenas o que precisa.',
      color: '#22C55E',
      bg: 'rgba(34, 197, 94, 0.1)',
      svgPath: '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>'
    }
  ];
}
