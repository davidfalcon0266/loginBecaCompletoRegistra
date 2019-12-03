import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'api/user';

  constructor(
    private http: HttpClient
  ) {}

   getUser(): Observable<User[]> {
     return this.http.get<User[]>(this.userUrl).pipe();
   }

   save(user: User) {
     return this.http.post(this.userUrl, user).pipe();
    }
}
