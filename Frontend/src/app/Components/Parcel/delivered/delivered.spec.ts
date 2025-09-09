import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Delivered } from './delivered';

describe('Delivered', () => {
  let component: Delivered;
  let fixture: ComponentFixture<Delivered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Delivered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Delivered);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
