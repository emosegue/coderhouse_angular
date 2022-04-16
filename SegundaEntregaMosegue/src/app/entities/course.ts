import { User as Professor } from './user';

export class Course {
  idCourse: number;
  name: string;
  startDate: Date;
  amountHours: number;
  professor: Professor;

  constructor(
    idCourse: number,
    name: string,
    startDate: Date,
    amountHours: number,
    professor: Professor
  ) {
    this.idCourse = idCourse;
    this.name = name;
    this.startDate = startDate;
    this.amountHours = amountHours;
    this.idCourse = idCourse;
    this.professor = professor;
  }

  getCourse() {
    return this;
  }
}
