export class User {
  idUser: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | undefined;
  bornDate: Date;
  gender: genderEnum;
  profileType: profileEnum | undefined;
  profileImage: File | undefined;
  accountType: number[] = [];
  isAdministrator: boolean = false;

  constructor(
    idUser: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    bornDate: Date,
    gender: genderEnum
  ) {
    this.idUser = idUser;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.bornDate = bornDate;
    this.gender = gender;
  }
}

enum genderEnum {
  'Indefinido' = 0,
  'Hombre' = 1,
  'Mujer' = 2,
}

enum profileEnum {
  'Desarrollador' = 0,
  'IT' = 1,
  'Usuario Final' = 2,
}
