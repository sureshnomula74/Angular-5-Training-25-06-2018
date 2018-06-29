import { TestBed, async, inject } from '@angular/core/testing';

import { InterceptorGuard } from './interceptor.guard';

describe('InterceptorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorGuard]
    });
  });

  it('should ...', inject([InterceptorGuard], (guard: InterceptorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
