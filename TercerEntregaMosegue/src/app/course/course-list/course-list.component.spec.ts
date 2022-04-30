import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/services/user.service';
import { CourseListComponent } from './course-list.component';

describe('StudentListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      imports: [SharedModule,HttpClientTestingModule],
      providers: [UserService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Los cursos se asignaron correctamente en el controlador', async () => {
    const fixture = TestBed.createComponent(CourseListComponent);
    const controller = fixture.componentInstance;
    fixture.detectChanges();
    const result  = controller
    expect(controller.courses.length).toBe(0);
    

  });

  it('Los cursos se renderizaron correctamente en la vista', () => {
    const fixture = TestBed.createComponent(CourseListComponent);
    const view = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(view.querySelector('div')).toBeTruthy();
  });
});
