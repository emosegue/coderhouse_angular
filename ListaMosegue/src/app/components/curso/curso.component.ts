import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent {
  nombre: string;
  profesor: string;
  idCurso: number;
  tutores: string[] | undefined;
  fechaInicio: Date;

  constructor(
    @Inject(String) nombre: string,
    @Inject(String) profesor: string,
    @Inject(Number) idCurso: number,
    @Inject(Object) tutores: string[],
    @Inject(Date) fechaInicio: Date
  ) {
    this.nombre = nombre;
    this.profesor = profesor;
    this.idCurso = idCurso;
    this.tutores = tutores;
    this.fechaInicio = fechaInicio;
  }

  getCurso() {
    return this;
  }

  setTutores(tutores: string[]) {
    this.tutores = tutores;
  }
}
