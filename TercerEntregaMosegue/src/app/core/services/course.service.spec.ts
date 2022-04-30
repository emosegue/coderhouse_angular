import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseService } from "./course.service";
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';

describe("CourseService", () => {
  let service: CourseService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        CourseService
      ]});
    service = TestBed.inject(CourseService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  

  it('El servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  it('Obtiene datos de la api',
  inject(
    [HttpTestingController, CourseService],
    (httpMock: HttpTestingController, courseService: CourseService) => {
    
      // const req = httpMock.expectOne({
      //   method: 'GET',
      //   url: 'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/courses'
      // });
      // req.flush({});

      }));
});
