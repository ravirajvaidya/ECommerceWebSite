import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDeals } from './top-deals';

describe('TopDeals', () => {
  let component: TopDeals;
  let fixture: ComponentFixture<TopDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopDeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDeals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
