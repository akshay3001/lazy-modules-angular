import { Component } from '@angular/core';
import { OrderHistory } from './order-history';

// Default export so the parent route can use `loadComponent: () => import(...)`.
@Component({
  selector: 'app-orders',
  imports: [OrderHistory],
  template: `
    <h2>Lazy component (loadComponent)</h2>

    <p>orders works!</p>

    <!-- OrderHistory is in its own chunk. It loads on the first click. -->
    @defer (on interaction) {
      <app-order-history />
    } @placeholder {
      <button>Show order history</button>
    } @loading {
      <p>Loading...</p>
    }
  `,
})
export default class Orders {}
