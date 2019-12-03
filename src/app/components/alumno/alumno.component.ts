import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
// import { CalificacionComponent } from '../calificacion/calificacion.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ModificarComponent } from '../modificar/modificar.component';
import { Alumno } from '../models/alumno';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  message = '';
  displayedColumns: string[] = ['name', 'curso', 'info', 'modificar'];
  dataSource: Alumno[];

  mandar: number;

  constructor(
    private alumnoService: AlumnoService,
    private matpu: MatDialog

  ) {
    // this.mandar = 0;
  }

  ngOnInit() {
    this.alumnoService.getAlumno().subscribe(
      data => {
        this.dataSource = data;
      }
    );
    this.message = 'soy tu padre';
  }

  // printMessage(event: string) {
  //   console.log(event);
  // }


  mandarId(idx: number) {
    this.mandar = idx;
    // console.log(this.mandar);
    // this.cali.mostrarId(this.mandar);

    return this.mandar;
  }

editStudent(data: Alumno) {

 const Dialog = this.matpu.open(ModificarComponent);
 console.log(data);
 Dialog.componentInstance.alumnos = data;
}



}
