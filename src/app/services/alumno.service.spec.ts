import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './alumno.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: AlumnoService = TestBed.get(AlumnoService);
    expect(service).toBeTruthy();
  });
});
