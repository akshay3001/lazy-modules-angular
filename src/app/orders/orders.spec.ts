import { DeferBlockState, TestBed } from '@angular/core/testing';
import Orders from './orders';

describe('Orders', () => {
  it('shows the placeholder, then the order history after the defer block completes', async () => {
    const fixture = TestBed.createComponent(Orders);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('button')?.textContent).toContain('Show order history');

    const [deferBlock] = await fixture.getDeferBlocks();
    await deferBlock.render(DeferBlockState.Complete);
    expect(el.textContent).toContain('order history works!');
  });
});
