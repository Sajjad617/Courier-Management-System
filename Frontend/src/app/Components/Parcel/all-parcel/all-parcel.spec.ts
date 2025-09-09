import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParcel } from './all-parcel';

describe('AllParcel', () => {
  let component: AllParcel;
  let fixture: ComponentFixture<AllParcel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllParcel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllParcel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
