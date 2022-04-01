import { Professor } from './professor';

export class Course {
  name: string;
  amountHours: number;
  amountClasses: number;
  professor: Professor;
  idCourse: number;
  startDate: Date;

  constructor(
    name: string,
    amountHours: number,
    amountClasses: number,
    professor: Professor,
    idCourse: number,
    startDate: Date
  ) {
    this.name = name;
    this.amountHours = amountHours;
    this.amountClasses = amountClasses;
    this.professor = professor;
    this.idCourse = idCourse;
    this.startDate = startDate;
  }

  getCourse() {
    return this;
  }
}
