import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../components/models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private userUrl = 'api/alumno';

  constructor(
    private http: HttpClient
  ) {}

    getAlumno(): Observable<Alumno[]> {
     return this.http.get<Alumno[]>(this.userUrl).pipe();
   }

   createAlumno(alumno: Alumno): Observable<Alumno[]> {
    return this.http.post<Alumno[]>(this.userUrl, alumno).pipe();
  }

  actualizarStudent(alumn: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(this.userUrl, alumn).pipe();

  }


}
