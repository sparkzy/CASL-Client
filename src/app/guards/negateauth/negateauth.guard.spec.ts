import { TestBed } from '@angular/core/testing';

import { NegateauthGuard } from './negateauth.guard';

describe('NegateauthGuard', () => {
  let guard: NegateauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NegateauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
