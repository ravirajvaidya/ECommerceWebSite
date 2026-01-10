import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductDetails } from './page-product-details';

describe('PageProductDetails', () => {
  let component: PageProductDetails;
  let fixture: ComponentFixture<PageProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProductDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
