import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { Features } from './components/features/features';
import { Showcase } from './components/showcase/showcase';
import { HowItWorks } from './components/about/about';
import { Testimonials } from './components/testimonials/testimonials';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, Stats, Features, Showcase, HowItWorks, Testimonials, Cta, Footer],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-stats />
      <app-features />
      <app-showcase />
      <app-how-it-works />
      <app-testimonials />
      <app-cta />
    </main>
    <app-footer />
  `,
  styleUrl: './app.scss'
})
export class App {}
