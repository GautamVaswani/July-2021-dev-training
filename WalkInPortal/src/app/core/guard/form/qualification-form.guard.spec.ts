import { TestBed } from '@angular/core/testing';

import { QualificationFormGuard } from './qualification-form.guard';

describe('QualificationFormGuard', () => {
  let guard: QualificationFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QualificationFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
