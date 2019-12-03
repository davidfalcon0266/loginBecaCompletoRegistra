import { TestBed } from '@angular/core/testing';

import { CalificacionService } from './calificacion.service';
import { HttpClientModule } from '@angular/common/http';

describe('CalificacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule ]
  }));

  it('should be created', () => {
    const service: CalificacionService = TestBed.get(CalificacionService);
    expect(service).toBeTruthy();
  });
});
