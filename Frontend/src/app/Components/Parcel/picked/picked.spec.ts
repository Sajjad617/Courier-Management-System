import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picked } from './picked';

describe('Picked', () => {
  let component: Picked;
  let fixture: ComponentFixture<Picked>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Picked]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Picked);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
