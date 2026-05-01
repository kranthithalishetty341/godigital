import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Work } from './pages/work/work';
import { Tour } from './pages/tour/tour';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
   {
    path: 'work',
    component: Work,
  },
   {
    path: 'tour',
    component: Tour,
  },
   {
    path: 'contact',
    component: Contact,
  },
];
