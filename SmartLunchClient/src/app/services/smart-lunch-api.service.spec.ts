import { TestBed, inject } from '@angular/core/testing';

import { SmartLunchApiService } from './smart-lunch-api.service';

describe('SmartLunchApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartLunchApiService]
    });
  });

  it('should be created', inject([SmartLunchApiService], (service: SmartLunchApiService) => {
    expect(service).toBeTruthy();
  }));
});
