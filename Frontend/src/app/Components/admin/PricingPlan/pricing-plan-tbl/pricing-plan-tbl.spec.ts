import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlanTbl } from './pricing-plan-tbl';

describe('PricingPlanTbl', () => {
  let component: PricingPlanTbl;
  let fixture: ComponentFixture<PricingPlanTbl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlanTbl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlanTbl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
