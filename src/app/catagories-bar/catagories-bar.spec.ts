import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesBar } from './catagories-bar';

describe('CatagoriesBar', () => {
  let component: CatagoriesBar;
  let fixture: ComponentFixture<CatagoriesBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatagoriesBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoriesBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
