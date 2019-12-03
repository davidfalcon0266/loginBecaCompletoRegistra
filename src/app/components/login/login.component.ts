import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AutenthicationService } from 'src/app/services/autenthication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isLogin = false;

  constructor(
    private userService: UserService , //para usar todos los metodos de ese servicio
    private authenticationService: AutenthicationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  setUser() {
    console.log('user', this.user);
  }



  // con esta funcion puedo ver si el usuario esta registrado o no

  // getUser() {
  //   this.userService.getUser().subscribe(
  //     data => {
  //       console.log('data: ', data);
  //       if (data.find(f => f.name === this.user.name && f.pws === this.user.pws)) {
  //         this.isLogin = true;
  //       } else {
  //         this.isLogin = false;
  //       }

  //       console.log('esta en la base de datos?: ', this.isLogin);
  //     },

  //     error => {
  //       console.log('error: ', error);
  //     }
  //   );
  // }



  // esta es la que verifica sobre la autentificacion paraa entrar a la pag o no
  onSubmit() {
    this.authenticationService.login(this.user.name, this.user.pws)
    .pipe(first())
    .subscribe(
      data => {
        if (data) {
          localStorage.setItem('userName', data.name + ' ' + data.lastName );
        }
        this.router.navigate(['../home'], {relativeTo: this.activatedRoute});

      },
      error => {
        console.log('el error es:', error);
      }
    );
  }



}
