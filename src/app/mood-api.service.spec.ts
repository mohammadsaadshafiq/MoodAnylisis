import { TestBed } from '@angular/core/testing';

import { MoodApiService } from './mood-api.service';

describe('MoodApiService', () => {
  let service: MoodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
