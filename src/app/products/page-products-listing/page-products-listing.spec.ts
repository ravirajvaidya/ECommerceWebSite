import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductsListing } from './page-products-listing';

describe('PageProductsListing', () => {
  let component: PageProductsListing;
  let fixture: ComponentFixture<PageProductsListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductsListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProductsListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
