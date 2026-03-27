import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="depoimentos" class="testimonials">
      <div class="container">
        <div appReveal class="section-header">
          <h2>O que nossos usuários dizem</h2>
        </div>

        <div class="testimonials-grid">
          @for (t of testimonials; track t.name; let i = $index) {
            <div appReveal [class]="'testimonial-card stagger-' + (i + 1)">
              <div class="stars">★★★★★</div>
              <p class="quote">"{{ t.quote }}"</p>
              <div class="divider"></div>
              <div class="author">
                <div class="avatar">{{ t.initials }}</div>
                <div>
                  <span class="author-name">{{ t.name }}</span>
                  <span class="author-role" [style.color]="t.roleColor" [style.background]="t.roleBg" [style.border-color]="t.roleBorder">
                    {{ t.role }}
                  </span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials = [
    {
      quote: 'Finalmente consigo acompanhar minha reforma sem depender de planilhas. O controle de custos me salvou de vários sustos.',
      name: 'Ricardo M.',
      role: 'PROPRIETÁRIO',
      initials: 'RM',
      roleColor: '#92400E',
      roleBg: 'rgba(245, 158, 11, 0.15)',
      roleBorder: 'rgba(245, 158, 11, 0.3)'
    },
    {
      quote: 'Compartilho fotos, arquivos de projetos e anotações direto pelo app. Meus clientes adoram a transparência que consigo oferecer agora.',
      name: 'Adriele S.',
      role: 'ARQUITETA',
      initials: 'CA',
      roleColor: '#1E40AF',
      roleBg: 'rgba(59, 130, 246, 0.15)',
      roleBorder: 'rgba(59, 130, 246, 0.3)'
    },
    {
      quote: 'O cronograma me ajuda a manter todas as etapas no prazo. O app é super simples, direto ao ponto e não trava.',
      name: 'Fernando S.',
      role: 'ENGENHEIRO',
      initials: 'FS',
      roleColor: '#166534',
      roleBg: 'rgba(34, 197, 94, 0.15)',
      roleBorder: 'rgba(34, 197, 94, 0.3)'
    }
  ];
}
