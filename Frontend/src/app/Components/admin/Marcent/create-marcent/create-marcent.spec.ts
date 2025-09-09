import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarcent } from './create-marcent';

describe('CreateMarcent', () => {
  let component: CreateMarcent;
  let fixture: ComponentFixture<CreateMarcent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMarcent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMarcent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
