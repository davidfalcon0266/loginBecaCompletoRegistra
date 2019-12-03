import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { User } from '../components/models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenthicationService {

  private userUrl = 'api/user';
  private currentUserSubject = new BehaviorSubject<User>(null); //los componentes se van a suscribir al servicio, para ver cada vez que el user cambia
  public currentUser:Observable<User>;//entrega los valores a los componentes

  constructor(
    private http: HttpClient
  ) { }

      //para saber quien es el usuario que esta en el momento
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  //metodo para ver si el usuario existe
  login(name: string, pws: string): Observable<User> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(map(user => {
        const userAux = user.find(f => f.name === name && f.pws === pws);
        if (userAux) {
          this.currentUserSubject.next(userAux);
          console.log('si se puede vamos');
        }
        return userAux; //guarda al usuario en el local storage
      }
        ));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
