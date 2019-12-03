import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CalificacionService } from '../../services/calificacion.service';
import { map } from 'rxjs/operators';
import { Calificacion } from '../models/calificacion';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit, OnChanges {
  @Input() message: string;
  @Output() response: EventEmitter<any> = new EventEmitter<any>();
  @Input() mandar;
  displayedColumns: string[] = ['id', 'materia', 'nota'];
  dataSource: {} = {};

// materia: Calificacion = new ca


  constructor( private serviCalifica: CalificacionService) {
      console.log(this.mandar);
      this.mostrarId(this.mandar);
    }

  ngOnInit() {
    // this.sendMessage();
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes, 'este es ');
    if ( changes.mandar.currentValue ) {
      this.mostrarId( changes.mandar.currentValue );
    }
  }
  mostrar() {
    return this.mandar;

  }

  // sendMessage() {
  //   this.response.emit(this.mandar);
  //   console.log(this.mandar);
  // }

  mostrarId(id: number) {
    console.log(id);
    this.serviCalifica.getCalificacion().subscribe(data => {
      console.log(data);
      this.dataSource = data;
    });
    }
  }



