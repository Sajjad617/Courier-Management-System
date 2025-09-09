import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBack } from './return-back';

describe('ReturnBack', () => {
  let component: ReturnBack;
  let fixture: ComponentFixture<ReturnBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnBack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnBack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
