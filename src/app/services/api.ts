import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Gallery {
  id:number;
  title: string;
  category: string;
  image: string;
  mapUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);

  getGalleryData(): Observable<Gallery[]>{
    return this.http.get<Gallery[]>('assets/gallery.json')
  }
}
