import { User, User as Student } from 'src/app/core/models/user.model';
import { Course } from 'src/app/core/models/course.model';

export interface Inscription {
  idInscription: number;
  student: Student;
  course: Course;
  transactionDate: Date;
  transactionUser: User;
}
