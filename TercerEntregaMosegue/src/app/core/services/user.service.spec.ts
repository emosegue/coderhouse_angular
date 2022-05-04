import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
describe("UserService", () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        UserService
      ]});
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  

  it('El servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  it('Obtiene datos de la api',
  inject(
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, UserService: UserService) => {
      UserService.getStudents$().subscribe(
        (usuarios) => {
          expect(usuarios.length).toBeGreaterThan(0)
        }
      )
       const req = httpMock.expectOne({
         method: 'GET',
         url: 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/users'
       });
       req.flush({});

      }));
});
