import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWalkinsComponent } from './all-walkins.component';

describe('AllWalkinsComponent', () => {
  let component: AllWalkinsComponent;
  let fixture: ComponentFixture<AllWalkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWalkinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWalkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
