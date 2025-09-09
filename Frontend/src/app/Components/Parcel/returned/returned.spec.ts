import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returned } from './returned';

describe('Returned', () => {
  let component: Returned;
  let fixture: ComponentFixture<Returned>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returned]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returned);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
