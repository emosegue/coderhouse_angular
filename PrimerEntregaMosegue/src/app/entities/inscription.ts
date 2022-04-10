import { User as Professor } from './user';
import { User as Student } from './user';
import { User } from './user';

export class Course {
  idInscription: number;
  student: Student;
  professor: Professor;
  transactionDate: Date;
  transactionUser: User;

  constructor(
    idInscription: number,
    student: Student,
    professor: Professor,
    transactionDate: Date,
    transactionUser: User
  ) {
    this.idInscription = idInscription;
    this.professor = professor;
    this.student = student;
    this.transactionDate = transactionDate;
    this.transactionUser = transactionUser;
  }

  getTransaction() {
    return this;
  }
}
