import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { Inscription } from '../models/inscription.model';
import { InscriptionService } from './inscription.service';

describe("InscriptionService", () => {
  let service: InscriptionService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        InscriptionService
      ]});
    service = TestBed.inject(InscriptionService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  

  it('El servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  it('Obtiene datos de la api',
  inject(
    [HttpTestingController, InscriptionService],
    (httpMock: HttpTestingController, InscriptionService: InscriptionService) => {
    
      // const req = httpMock.expectOne({
      //   method: 'GET',
      //   url: 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/Inscriptions'
      // });
      // req.flush({});

      }));
});
