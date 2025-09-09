import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParcel } from './new-parcel';

describe('NewParcel', () => {
  let component: NewParcel;
  let fixture: ComponentFixture<NewParcel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewParcel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewParcel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
