import { TestBed } from '@angular/core/testing';

import { AutenthicationService } from './autenthication.service';
import { HttpClientModule } from '@angular/common/http';

describe('AutenthicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule ]
  }));

  it('should be created', () => {
    const service: AutenthicationService = TestBed.get(AutenthicationService);
    expect(service).toBeTruthy();
  });
});
