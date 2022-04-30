export interface User {
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
  accountType: number[];
  isAdministrator: boolean | undefined;
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
