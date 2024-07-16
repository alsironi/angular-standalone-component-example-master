import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/home/home.route').then((m) => m.homeRoutes),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about/about.route').then((m) => m.aboutRoutes),
  },
];
