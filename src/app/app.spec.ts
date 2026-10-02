import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('renders the title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(h1?.textContent).toContain('lazy-load-modules-app');
  });

  it('loads the customers route group on navigation', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/customers');
    expect(harness.routeNativeElement?.textContent).toContain('customers works!');
  });

  it('loads the orders component on navigation', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/orders');
    expect(harness.routeNativeElement?.textContent).toContain('orders works!');
  });
});
