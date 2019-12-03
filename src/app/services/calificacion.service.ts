import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from '../components/models/calificacion';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private userUrl = 'api/calificacion';
  califica: [] = [];
  constructor(
    private http: HttpClient
  ) {
  }

   getCalificacion() {
       return this.http.get(this.userUrl);
    }
  }

