import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlanForm } from './pricing-plan-form';

describe('PricingPlanForm', () => {
  let component: PricingPlanForm;
  let fixture: ComponentFixture<PricingPlanForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlanForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlanForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
