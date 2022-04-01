export class User {
  name: string;
  email: string;
  bornDate: Date;
  gender: genderEnum;

  constructor(name: string, email: string, bornDate: Date, gender: genderEnum) {
    this.name = name;
    this.email = email;
    this.bornDate = bornDate;
    this.gender = gender;
  }
}

enum genderEnum {
  Male,
  Female,
  Undefined,
}
