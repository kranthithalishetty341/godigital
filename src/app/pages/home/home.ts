import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  slides = [
    {
      number: '01',
      title: 'GO DIGITAL TECHNOLOGY',
      subtitle: '360 VIRTUAL TOUR FOR GOOGLE MAP',
      description:
        'Google Business Profile helps businesses manage their online presence across Google Search and Maps.',
      image:
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600',
    },

    {
      number: '02',
      title: 'GOOGLE BUSINESS PROFILE',
      subtitle: 'INCREASE YOUR ONLINE VISIBILITY',
      description:
        'Improve local SEO, attract customers and grow your digital business presence.',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600',
    },

    {
      number: '03',
      title: '360 VIRTUAL EXPERIENCE',
      subtitle: 'MODERN DIGITAL WALKTHROUGH',
      description:
        'Interactive virtual tours that create engaging customer experiences.',
      image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600',
    },
  ];

  private router = inject(Router);
  ourWork() {
    this.router.navigate([`/work`]);
  }
}
