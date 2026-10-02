import { Routes } from '@angular/router';

// Neither feature is in the main bundle. Each one gets its own chunk.
export const routes: Routes = [
  // A lazy group of child routes. This replaces a lazy NgModule.
  { path: 'customers', loadChildren: () => import('./customers/customers.routes') },
  // A single lazy standalone component.
  { path: 'orders', loadComponent: () => import('./orders/orders') },
];
