import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcent } from './marcent';

describe('Marcent', () => {
  let component: Marcent;
  let fixture: ComponentFixture<Marcent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marcent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Marcent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
