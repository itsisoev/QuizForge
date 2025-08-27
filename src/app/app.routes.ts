import {Routes} from '@angular/router';
import {ROUTES} from './shared/constants/routes.constant';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ROUTES.HOME,
        loadComponent: () =>
          import('./features/home/home').then(m => m.Home)
      }
    ]
  }
];
