import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinRoleDetailsCardComponent } from './walkin-role-details-card.component';

describe('WalkinRoleDetailsCardComponent', () => {
  let component: WalkinRoleDetailsCardComponent;
  let fixture: ComponentFixture<WalkinRoleDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinRoleDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinRoleDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
