import { TestBed, inject } from '@angular/core/testing';

import { Comp4Service } from './comp4.service';

describe('Comp4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Comp4Service]
    });
  });

  it('should ...', inject([Comp4Service], (service: Comp4Service) => {
    expect(service).toBeTruthy();
  }));
});
