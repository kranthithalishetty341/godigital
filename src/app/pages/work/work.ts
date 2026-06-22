import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Api, Gallery } from '../../services/api';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work {
  private readonly router = inject(Router);
  activeCategory = 'All Work';

  categories = [
    'All Work',
    'Cake & Bakery',
    'Restaurant & Café',
    'Clothing Showroom',
    'Hospital & Clinic',
    'Gym & Fitness Centre',
    'Interior Decoration'
  ];

  private apiService = inject(Api);

  galleries: Gallery[] = [];
  // filteredItems: Gallery[] = [];

  filteredItems = signal<Gallery[]>([]);

  // get filteredItems() {
  //   if (this.activeCategory === 'All Work') {
  //     return this.galleries;
  //   }

  //   return this.galleries.filter(
  //     item => item.category === this.activeCategory
  //   );
  // }
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getGalleryData().subscribe({
      next: (data) => {
        this.galleries = data;
        console.log(data);
        this.applyFilter();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  applyFilter() {
    if (this.activeCategory === 'All Work') {
      this.filteredItems.set(this.galleries);
    } else {
      const filteredData = this.galleries.filter(
        item => item.category === this.activeCategory
      );
      this.filteredItems.set(filteredData); 
    }
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }


  onPortfolio(item: any) {
    console.log(item);
    this.router.navigate(['/portfolio', encodeURIComponent(item.title)])
  }
}
