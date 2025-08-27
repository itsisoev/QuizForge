import {Routes} from '@angular/router';
import {ROUTES} from './shared/constants/routes.constant';

export const routes: Routes = [
  {
    path: ROUTES.HOME,
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
    pathMatch: 'full',
  },
  {
    path: ROUTES.LIBRARY,
    loadChildren: () =>
      import('./features/library/library.routes').then(m => m.libraryRoutes)
  },
  {
    path: '**',
    redirectTo: ROUTES.HOME,
  }
];
