import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour',
  imports: [],
  templateUrl: './tour.html',
  styleUrl: './tour.scss',
})
export class Tour {
  currentSlide = 0;

  interval: any;
   private router = inject(Router);

  slides = [
    {
      image: 'images/slide1.png',
      title: 'GO DIGITAL TECHNOLOGY',
      subtitle: '360 VIRTUAL TOUR',
      description:
        'Improve your business visibility with modern digital experiences.',
    },

    {
      image: 'images/slide2.png',
      title: 'GOOGLE BUSINESS PROFILE',
      subtitle: 'ONLINE BRANDING',
      description:
        'Reach more customers and grow your online business presence.',
    },

    {
      image: 'images/slide3.png',
      title: '360 DIGITAL EXPERIENCE',
      subtitle: 'VIRTUAL WALKTHROUGH',
      description:
        'Interactive virtual tours for modern businesses.',
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;

    clearInterval(this.interval);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ourWork(){
     this.router.navigate([`/work`]);
  }
}
