import { Routes } from '@angular/router';
import { Customers } from './customers';

// Default export so the parent route can use `loadChildren: () => import(...)`.
export default [{ path: '', component: Customers }] satisfies Routes;
