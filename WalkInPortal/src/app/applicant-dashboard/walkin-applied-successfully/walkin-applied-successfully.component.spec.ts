import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinAppliedSuccessfullyComponent } from './walkin-applied-successfully.component';

describe('WalkinAppliedSuccessfullyComponent', () => {
  let component: WalkinAppliedSuccessfullyComponent;
  let fixture: ComponentFixture<WalkinAppliedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinAppliedSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinAppliedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
