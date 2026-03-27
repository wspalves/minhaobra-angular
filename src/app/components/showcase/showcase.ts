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

      <div class="phones-scroll hide-scrollbar">
        <div class="phones-grid">
          <!-- Phone 1: Home -->
          <div appReveal class="phone-col stagger-1">
            <div class="phone">
              <div class="notch"></div>
              <div class="phone-body">
                <div class="mock-greeting">
                  <span class="mock-sub">Boa tarde,</span>
                  <span class="mock-name">Ricardo</span>
                </div>

                <div class="mock-card">
                  <div class="mock-card-cover">🏡</div>
                  <div class="mock-card-body">
                    <h4>Casa em Ibiti</h4>
                    <div class="mock-progress-row">
                      <span>Progresso</span>
                      <span class="mono">47%</span>
                    </div>
                    <div class="mock-bar"><div class="mock-bar-fill" style="width:47%"></div></div>
                  </div>
                </div>

                <div class="mock-actions">
                  <div class="mock-action">
                    <div class="mock-action-icon blue">📅</div>
                    <span>Etapas</span>
                  </div>
                  <div class="mock-action">
                    <div class="mock-action-icon orange">💰</div>
                    <span>Custos</span>
                  </div>
                </div>

                <div class="mock-tasks">
                  <span class="mock-tasks-label">Próximas Tarefas</span>
                  <div class="mock-task-item">
                    <span class="mock-task-dot">◯</span>
                    <div>
                      <span class="mock-task-title">Comprar cimento</span>
                      <span class="mock-task-meta">Etapa: Alvenaria</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="phone-caption">
              <h4>Visão geral da obra</h4>
              <p>Acompanhe tudo em um só lugar</p>
            </div>
          </div>

          <!-- Phone 2: Cronograma -->
          <div appReveal class="phone-col stagger-2">
            <div class="phone">
              <div class="notch"></div>
              <div class="phone-body no-pad">
                <div class="mock-top-bar">
                  <h4>Cronograma</h4>
                  <div class="mock-add-btn">+</div>
                </div>

                <div class="mock-stages">
                  <div class="mock-stage done">
                    <div class="mock-stage-bar green"></div>
                    <div class="mock-stage-body">
                      <div class="mock-stage-row">
                        <span class="mock-stage-name">Fundação</span>
                        <span class="mock-check">✓</span>
                      </div>
                      <span class="mock-stage-sub">100% Concluído</span>
                    </div>
                  </div>

                  <div class="mock-stage active">
                    <div class="mock-stage-bar blue"></div>
                    <div class="mock-stage-body">
                      <div class="mock-stage-row">
                        <span class="mock-stage-name">Alvenaria</span>
                        <span class="mock-stage-badge">EM ANDAMENTO</span>
                      </div>
                      <span class="mock-stage-sub">Previsão: 15 Out</span>
                      <div class="mock-bar sm"><div class="mock-bar-fill blue" style="width:60%"></div></div>
                    </div>
                  </div>

                  <div class="mock-stage pending">
                    <div class="mock-stage-bar gray"></div>
                    <div class="mock-stage-body">
                      <div class="mock-stage-row">
                        <span class="mock-stage-name">Telhado</span>
                        <span class="mock-stage-pending">PENDENTE</span>
                      </div>
                      <span class="mock-stage-sub">Aguardando início</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="phone-caption">
              <h4>Etapas detalhadas</h4>
              <p>Organize cada fase da construção</p>
            </div>
          </div>

          <!-- Phone 3: Custos -->
          <div appReveal class="phone-col stagger-3">
            <div class="phone">
              <div class="notch"></div>
              <div class="phone-body no-pad">
                <div class="mock-top-bar col">
                  <div class="mock-costs-header">
                    <h4>Custos</h4>
                    <span class="mock-stage-badge">Alvenaria</span>
                  </div>
                  <div class="mock-donut-wrap">
                    <div class="mock-donut">
                      <div class="mock-donut-center">
                        <span class="mock-donut-label">Gasto</span>
                        <span class="mock-donut-value">R$ 78k</span>
                      </div>
                    </div>
                    <div class="mock-legend">
                      <div class="mock-legend-item"><span class="dot amber"></span><span>Materiais</span><span class="mono">54%</span></div>
                      <div class="mock-legend-item"><span class="dot blue"></span><span>Serviços</span><span class="mono">28%</span></div>
                      <div class="mock-legend-item"><span class="dot green"></span><span>Projetos</span><span class="mono">18%</span></div>
                    </div>
                  </div>
                </div>

                <div class="mock-expenses">
                  <span class="mock-tasks-label">Últimas Despesas</span>

                  @for (exp of expenses; track exp.name) {
                    <div class="mock-expense-row">
                      <div class="mock-expense-left">
                        <div class="mock-expense-icon" [style.background]="exp.bg">{{ exp.emoji }}</div>
                        <div>
                          <span class="mock-expense-name">{{ exp.name }}</span>
                          <span class="mock-expense-cat">{{ exp.category }}</span>
                        </div>
                      </div>
                      <span class="mock-expense-amount">{{ exp.amount }}</span>
                    </div>
                  }
                </div>
              </div>
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
export class Showcase {
  expenses = [
    { name: 'Tijolos', category: 'Alvenaria', amount: 'R$ 2.450', emoji: '🧱', bg: '#FFF3E0' },
    { name: 'Mão de obra', category: 'Pagamento', amount: 'R$ 4.000', emoji: '👷', bg: '#E3F2FD' },
    { name: 'Taxas Pref.', category: 'Projetos', amount: 'R$ 850', emoji: '📄', bg: '#E8F5E9' }
  ];
}
