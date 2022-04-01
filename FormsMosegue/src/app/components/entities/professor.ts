import { User } from './user';

export class Professor extends User {
  constructor(name: string, email: string, age: number, gender: genderEnum) {
    super(name, email, age, gender);
  }
}

enum genderEnum {
  Male,
  Female,
  Undefined,
}
