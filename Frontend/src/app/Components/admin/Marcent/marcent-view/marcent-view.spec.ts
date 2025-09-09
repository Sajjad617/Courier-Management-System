import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcentView } from './marcent-view';

describe('MarcentView', () => {
  let component: MarcentView;
  let fixture: ComponentFixture<MarcentView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcentView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcentView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
