import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../models/user.model';

describe("UserService", () => {
  let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        UserService
      ]});
    service = TestBed.inject(UserService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  

  it('El servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  it('Obtiene datos de la api',
  inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, UserService: UserService) => {
    
      // const req = httpMock.expectOne({
      //   method: 'GET',
      //   url: 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/Users'
      // });
      // req.flush({});

      }));
});
