import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  formG: FormGroup;
  public alumno: Alumno = new Alumno();


  constructor(private formB: FormBuilder,
              private service: AlumnoService ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formG = this.formB.group({
      // id: [null, Validators.required],
      name: [null, Validators.required],
      curso: [null, Validators.required],
    });
  }

  saveUser() {


    Swal.showLoading();
    // this.alumno.id = this.formG.get('id').value;
    this.alumno.name = this.formG.get('name').value;
    this.alumno.curso = this.formG.get('curso').value;

    this.service.createAlumno(this.alumno).subscribe(
      data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your studen has save succesFull',
          showConfirmButton: false,
          timer: 2500
        });
        console.log('se le guardo el usuario ', data);
      },
      error => {
        console.log('error guardando el usuario', error);
      }
    );
  }
  }



