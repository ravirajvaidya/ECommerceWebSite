import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopingcart } from './page-shopingcart';

describe('PageShopingcart', () => {
  let component: PageShopingcart;
  let fixture: ComponentFixture<PageShopingcart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageShopingcart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShopingcart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
