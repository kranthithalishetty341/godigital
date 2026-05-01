import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  activeCategory = 'All Work';

  categories = [
    'All Work',
    'Cake & Bakery',
    'Restaurant & Café',
    'Clothing Showroom',
    'Hospital & Clinic',
    'Gym & Fitness Centre',
  ];

  galleryItems = [
    {
      title: 'Desserts & More',
      category: 'Cake & Bakery',
      image: 'images/cafe1.png',
      link: '/details',
    },

    {
      title: 'Anna\'s Bakery',
      category: 'Cake & Bakery',
      image: 'images/cafe2.webp',
      link: '/details',
    },

    {
      title: 'The Bakery',
      category: 'Cake & Bakery',
      image: 'images/cafe3.jpg',
      link: '/details',
    },

    {
      title: 'Patel Cake Shop',
      category: 'Cake & Bakery',
      image: 'images/cafe4.jpg',
      link: '/details',
    },

    {
      title: 'iFixandropair',
      category: 'Restaurant & Café',
      image: 'images/restaurant1.jpg',
      link: '/details',
    },
    {
      title: 'PY cafe',
      category: 'Restaurant & Café',
      image: 'images/restaurant2.jpg',
      link: '/details',
    },
    {
      title: 'Top In Town',
      category: 'Restaurant & Café',
      image: 'images/restaurant3.jpg',
      link: '/details',
    },
    {
      title: 'Brewrista',
      category: 'Restaurant & Café',
      image: 'images/restaurant4.webp',
      link: '/details',
    },
    {
      title: 'Paapi Peth',
      category: 'Restaurant & Café',
      image: 'images/restaurant5.avif',
      link: '/details',
    },
    {
      title: 'Thai Tanic',
      category: 'Restaurant & Café',
      image: 'images/restaurant6.jpg',
      link: '/details',
    },
    {
      title: 'Food Fusion',
      category: 'Restaurant & Café',
      image: 'images/restaurant7.jpg',
      link: '/details',
    },

    {
      title: 'Be You',
      category: 'Clothing Showroom',
      image: 'images/clothing1.jpg',
      link: '/details',
    },
    {
      title: 'Name It.',
      category: 'Clothing Showroom',
      image: 'images/clothing2.jpg',
      link: '/details',
    },
    {
      title: 'Radha Rani',
      category: 'Clothing Showroom',
      image: 'images/clothing3.avif',
      link: '/details',
    },
    {
      title: 'Nayi Naveli',
      category: 'Clothing Showroom',
      image: 'images/clothing4.avif',
      link: '/details',
    },
    {
      title: 'Ganesh',
      category: 'Hospital & Clinic',
      image: 'images/hospital1.jpg',
      link: '/details',
    },
    {
      title: 'Hospital',
      category: 'Hospital & Clinic',
      image: 'images/hospital2.avif',
      link: '/details',
    },
    {
      title: 'Sooriya Hospital',
      category: 'Hospital & Clinic',
      image: 'images/hospital3.jpg',
      link: '/details',
    },
    {
      title: 'Radha Govind Hospital',
      category: 'Hospital & Clinic',
      image: 'images/hospital4.jpg',
      link: '/details',
    },
     {
      title: 'Maharastra Fitness',
      category: 'Gym & Fitness Centre',
      image: 'images/gym.png',
      link: '/details',
    },
  ];

  get filteredItems() {
    if (this.activeCategory === 'All Work') {
      return this.galleryItems;
    }

    return this.galleryItems.filter(
      item => item.category === this.activeCategory
    );
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}
