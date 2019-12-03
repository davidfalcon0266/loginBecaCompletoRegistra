import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
