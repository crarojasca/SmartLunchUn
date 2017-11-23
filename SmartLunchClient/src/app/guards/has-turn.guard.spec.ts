import { TestBed, async, inject } from '@angular/core/testing';

import { HasTurnGuard } from './has-turn.guard';

describe('HasTurnGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasTurnGuard]
    });
  });

  it('should ...', inject([HasTurnGuard], (guard: HasTurnGuard) => {
    expect(guard).toBeTruthy();
  }));
});
