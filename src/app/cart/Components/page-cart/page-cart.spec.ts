import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCart } from './page-cart';

describe('PageCart', () => {
  let component: PageCart;
  let fixture: ComponentFixture<PageCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
