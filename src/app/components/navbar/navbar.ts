import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);
  activeMenu = '';
  mobileMenuOpen = false;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      if(event.url && event.url.includes('/portfolio/')){
        this.activeMenu = '/work'
      }else{
        this.activeMenu = event.url;
      }
    });
  }

  onMenu(path: string) {
    this.activeMenu = path;
     this.closeMenu();
    this.router.navigate([`/${path}`]);
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }
}
