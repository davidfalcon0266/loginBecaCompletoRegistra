import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { CrearComponent } from './components/crear/crear.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';


const routes: Routes = [
  {
    path: '', component:LoginComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'userList', component:UserListComponent
  },
  {
    path: 'alumno', component:AlumnoComponent
  },
  {
    path: 'calificaciones', component: CalificacionComponent
  },
  {
    path: 'registro', component: RegisterComponent
  },
  {
    path: 'crear', component: CrearComponent
  },
  {
    path: 'modificar', component: ModificarComponent
  },
  {
    path: 'calculadora', component: CalculadoraComponent
  },
  {
    path: 'home',
    canActivate: [AuthorizationGuard],
    component:HomeComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
