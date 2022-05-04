import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from "./authentication.service";
import { User } from '../models/user.model';
import { RouterTestingModule } from '@angular/router/testing';

describe("AuthenticationService", () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AuthenticationService
      ]});
    service = TestBed.inject(AuthenticationService);
  });


  it('El servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });

  it(
    'El login funciona correctamente',
    inject([HttpTestingController, AuthenticationService], 
    (httpMock: HttpTestingController, AuthenticationService: AuthenticationService) => {
      const mockUsuario: User[] = [{
        "firstName": "Emanuelo",
        "lastName": "Mosegue",
        "username": "admin",
        "password": "admin",
        "email": "emanuelmosegue@gmail.com",
        "phone": "+5492995329567",
        "bornDate": new Date(1991,5,2),
        "gender": 1,
        "profileType": 1,
        "accountType": [
         1
        ],
        "isAdministrator": true,
        "idUser": 1
       },
       {
        "firstName": "Marcia",
        "lastName": "Cardenas",
        "username": "user",
        "password": "user",
        "email": "marciacardenas@hotmail.com",
        "phone": "+5492995982312",
        "bornDate": new Date(1991,5,2),
        "gender": 2,
        "profileType": 3,
        "accountType": [
         2
        ],
        "isAdministrator": false,
        "idUser": 2
       }];

       AuthenticationService.login("admin", "admin").subscribe((data) => {
        expect(data[0].idUser).toEqual(1);
      });
      
      // AuthenticationService.login("user", "user").subscribe((data) => {
      //   expect(data[1].idUser).toEqual(mockUsuario[1].idUser);
      // });

      const req = httpMock.expectOne({
        method: 'GET',
        url: 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/users'
      });
      req.flush(mockUsuario);
    }
    )
  )
});
