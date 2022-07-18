import { TestBed } from '@angular/core/testing';

import { DataPokService } from './data-pok.service';

describe('DataPokService', () => {
  let service: DataPokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
