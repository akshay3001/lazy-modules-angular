import { Component } from '@angular/core';

// Only used inside a @defer block, so Angular puts it in a separate chunk.
@Component({
  selector: 'app-order-history',
  template: `
    <h3>Deferred component (&#64;defer)</h3>

    <p>order history works!</p>
  `,
})
export class OrderHistory {}
