import { Component, ChangeDetectionStrategy, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header [class.scrolled]="isScrolled()">
      <div class="container nav-wrap">
        <!-- Logo -->
        <a class="logo" (click)="scrollToTop($event)">
          <span class="logo-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0a2.12 2.12 0 010-3L12 9"/>
              <path d="M17.64 15L22 10.64"/>
              <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91"/>
            </svg>
          </span>
          <span class="logo-name">Reformei</span>
        </a>

        <!-- Desktop nav pill -->
        <nav class="nav-pill">
          @for (item of navItems; track item.id) {
            <button (click)="scrollTo(item.id)">{{ item.name }}</button>
          }
        </nav>

        <!-- Desktop CTA -->
        <button class="nav-cta" (click)="scrollTo('cta')">Baixar App</button>

        <!-- Mobile toggle -->
        <button
          class="hamburger"
          [class.open]="menuOpen()"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div class="mobile-menu">
          @for (item of navItems; track item.id) {
            <button (click)="scrollTo(item.id)">{{ item.name }}</button>
          }
          <button class="mobile-cta" (click)="scrollTo('cta')">Baixar App Grátis</button>
        </div>
      }
    </header>
  `,
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOpen = signal(false);
  isScrolled = signal(false);

  navItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Funcionalidades', id: 'funcionalidades' },
    { name: 'Como Funciona', id: 'como-funciona' },
    { name: 'Depoimentos', id: 'depoimentos' }
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  scrollToTop(e: Event) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
