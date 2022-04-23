import { User as Professor } from 'src/app/core/models/user.model';

export interface Course {
  idCourse: number;
  name: string;
  startDate: Date;
  endDate: Date;
  amountHours: number;
  professor: number;
}
