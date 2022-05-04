import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentListComponent } from './student-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListComponent],
      imports: [HttpClientModule,SharedModule,HttpClientTestingModule],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Los usuarios se asignaron correctamente en el controlador', inject([HttpClient], ()  => {
    const fixture = TestBed.createComponent(StudentListComponent);
    const controller = fixture.componentInstance;
    fixture.detectChanges();
    
    setTimeout(() => {expect(controller.users.length).toBeGreaterThan(0)
    }, 2000)

  }));
  

  it('Los usuarios se renderizaron correctamente en la vista', () => {
    const fixture = TestBed.createComponent(StudentListComponent);
    const view = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(view.querySelector('div')).toBeTruthy();
  });
});

