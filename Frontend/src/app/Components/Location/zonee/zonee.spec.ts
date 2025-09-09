import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zonee } from './zonee';

describe('Zonee', () => {
  let component: Zonee;
  let fixture: ComponentFixture<Zonee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zonee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zonee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
