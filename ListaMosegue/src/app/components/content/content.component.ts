import { Component, OnInit } from '@angular/core';
import { CursoComponent } from '../curso/curso.component';
import { AlumnoComponent } from '../alumno/alumno.component';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  alumnos: AlumnoComponent[] = [];
  constructor() {}

  ngOnInit(): void {
    let curso = new CursoComponent(
      'Angular',
      'Abner Garcia',
      27310,
      ['Victoria Cordero', 'Pablo García', 'Fernando Olvera'],
      new Date(2022, 3, 8)
    );

    this.alumnos.push(
      new AlumnoComponent('Emanuel Mosegue', this.randomAge(), curso),
      new AlumnoComponent('Adrian Camacho', this.randomAge(), curso),
      new AlumnoComponent('Agustina Mozzi', this.randomAge(), curso),
      new AlumnoComponent('Brian Nigrelli', this.randomAge(), curso),
      new AlumnoComponent('Angela Garcia Morel', this.randomAge(), curso)
      //new AlumnoComponent('Timoteo Gambella', this.randomAge(), curso),
      //new AlumnoComponent('Franco Zangla Benitez', this.randomAge(), curso)
    );
  }
  randomAge(): number {
    return Math.floor(Math.random() * (50 - 18 + 1) + 18);
  }
}
