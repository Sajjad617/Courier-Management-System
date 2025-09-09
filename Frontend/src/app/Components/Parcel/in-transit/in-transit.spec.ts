import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTransit } from './in-transit';

describe('InTransit', () => {
  let component: InTransit;
  let fixture: ComponentFixture<InTransit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InTransit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTransit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
