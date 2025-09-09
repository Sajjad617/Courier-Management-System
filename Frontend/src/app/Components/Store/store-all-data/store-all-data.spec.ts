import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAllData } from './store-all-data';

describe('StoreAllData', () => {
  let component: StoreAllData;
  let fixture: ComponentFixture<StoreAllData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreAllData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreAllData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
