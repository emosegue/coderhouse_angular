import { Component, Inject, OnInit } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  nombre: string;
  edad: number;
  curso: CursoComponent;

  constructor(
    @Inject(String) nombre: string,
    @Inject(Number) edad: number,
    @Inject(Object) curso: CursoComponent
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
