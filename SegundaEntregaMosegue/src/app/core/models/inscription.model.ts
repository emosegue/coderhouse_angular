import {
  User as Professor,
  User,
  User as Student,
} from 'src/app/core/models/user.model';

export interface Inscription {
  idInscription: number;
  student: Student;
  professor: Professor;
  transactionDate: Date;
  transactionUser: User;
}
