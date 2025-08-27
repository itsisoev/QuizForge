import {Routes} from '@angular/router';
import {Library} from './library';

export const libraryRoutes: Routes = [
  {
    path: '',
    component: Library,
    children: [
    ]
  }
];
