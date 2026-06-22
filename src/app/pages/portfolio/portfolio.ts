import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../../services/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {

  private route = inject(ActivatedRoute);
  private apiService = inject(Api);
  private sanitizer = inject(DomSanitizer);
  private location = inject(Location);
  portfolioName = '';
  selectedPortfolio = signal<SafeResourceUrl | null>(null);

  ngOnInit() {
    this.portfolioName = decodeURIComponent(
      this.route.snapshot.paramMap.get('name') || ''
    );
    this.loadData();
  }

  loadData(): void {
    this.apiService.getGalleryData().subscribe({
      next: (data) => {
        const selectedWork: any = data.find(x => x.title === this.portfolioName);
        if (selectedWork?.mapUrl) {
          this.selectedPortfolio.set(
            this.sanitizer.bypassSecurityTrustResourceUrl(
              selectedWork.mapUrl
            )
          );
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  goBack(){
    this.location.back();
  }

}
