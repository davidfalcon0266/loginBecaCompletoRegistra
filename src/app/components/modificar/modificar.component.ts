import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  formG: FormGroup;
  alumno: Alumno = new Alumno();
  alumnos: Alumno = new Alumno();


  constructor(private formB: FormBuilder,
              private service: AlumnoService ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formG = this.formB.group({
      id: this.alumnos.id,
      name: this.alumnos.name,
      curso: this.alumnos.curso
    });
  }

  actualizarStudent() {
    Swal.showLoading();
    this.alumno.id = this.formG.get('id').value;
    this.alumno.name = this.formG.get('name').value;
    this.alumno.curso = this.formG.get('curso').value;

    this.service.actualizarStudent(this.alumnos).subscribe(
      data => {
        this.alumnos = data;

        Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Your studen has been uptate',
  showConfirmButton: false,
  timer: 2500
});

        this.getAlumnos();
        console.log('se le actualizo el usuario ', this.alumno);
      },
      error => {
        console.log('error al actualizar el usuario', this.alumno);
      }
    );
  }


getAlumnos() {
  this.service.getAlumno().subscribe(
    data => { console.log('data', data); },
    error => {});
}

}
