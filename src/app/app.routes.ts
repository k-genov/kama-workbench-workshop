import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: 'desktop', loadComponent: () => import('./desktop/desktop')},
  {path: 'notifications', loadComponent: () => import('./notifications/notifications')},
  {path: 'projects', loadComponent: () => import('./projects/projects')},
  {path: 'projects/:id', loadComponent: () => import('./project/project')},
  {path: 'find/project', loadComponent: () => import('./find-projects/find-projects')},
  {path: 'terminal', loadComponent: () => import('./terminal/terminal')},
];
