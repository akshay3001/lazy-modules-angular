# LazyLoadModules

A small demo of lazy loading in Angular 22.

The app shell only has the title, three buttons, and a router outlet. All feature code loads on demand:

| Feature | How it loads | File |
| --- | --- | --- |
| Customers | `loadChildren`: a lazy group of child routes (this replaces a lazy NgModule) | `src/app/customers/customers.routes.ts` |
| Orders | `loadComponent`: one lazy standalone component | `src/app/orders/orders.ts` |
| Order history | `@defer (on interaction)`: a lazy part of a template | `src/app/orders/order-history.ts` |

Run `npm run build` and look at the "Lazy chunk files" table. Each feature has its own chunk. You can also open the Network tab in the browser and click the buttons to see the chunks load.

## Development server

Run `npm start` and open `http://localhost:4200/`.

## Build

Run `npm run build`. The output goes to `dist/lazy-load-modules/browser`.

## Tests

Run `npm test` to run the unit tests with [Vitest](https://vitest.dev).

## Lint

Run `npm run lint` to lint with [angular-eslint](https://github.com/angular-eslint/angular-eslint).
