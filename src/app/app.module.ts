import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';



import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/mocks/in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { OnlyCharDirective } from './directives/only-char.directive';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { CalificacionComponent } from './components/calificacion/calificacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { CrearComponent } from './components/crear/crear.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    HomeComponent,
    RegisterComponent,
    OnlyCharDirective,
    AlumnoComponent,
    CalificacionComponent,
    NavbarComponent,
    ModificarComponent,
    CrearComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    HttpClientModule,
    MatTableModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
