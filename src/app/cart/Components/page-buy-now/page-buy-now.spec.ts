import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuyNow } from './page-buy-now';

describe('PageBuyNow', () => {
  let component: PageBuyNow;
  let fixture: ComponentFixture<PageBuyNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBuyNow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBuyNow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
