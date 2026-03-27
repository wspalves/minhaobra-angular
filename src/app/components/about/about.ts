import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-how-it-works',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="como-funciona" class="how-it-works">
      <div class="container">
        <div appReveal class="section-header">
          <h2>Comece em 3 passos</h2>
        </div>

        <div class="steps-wrap">
          <div class="steps-line"></div>

          <div class="steps-grid">
            @for (step of steps; track step.num; let i = $index) {
              <div appReveal [class]="'step stagger-' + (i + 1)">
                <div class="step-circle">
                  <span>{{ step.num }}</span>
                </div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.scss'
})
export class HowItWorks {
  steps = [
    {
      num: '1',
      title: 'Baixe o app',
      desc: 'Disponível gratuitamente na App Store e Google Play para iOS e Android.'
    },
    {
      num: '2',
      title: 'Cadastre sua obra',
      desc: 'Adicione nome, tipo (obra ou reforma), data de início e foto de capa. Pronto em segundos.'
    },
    {
      num: '3',
      title: 'Gerencie tudo',
      desc: 'Crie etapas, registre custos, convide sua equipe e acompanhe o progresso.'
    }
  ];
}
