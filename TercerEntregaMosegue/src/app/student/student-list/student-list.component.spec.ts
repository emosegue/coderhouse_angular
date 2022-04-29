import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentListComponent } from './student-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/services/user.service';
import { HttpClient } from '@angular/common/http';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;
  let userService: UserService;
  let httpController: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListComponent],
      imports: [SharedModule],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Los usuarios se asignaron correctamente en el controlador', () => {
    const fixture = TestBed.createComponent(StudentListComponent);
    const controller = fixture.componentInstance;

    fixture.detectChanges();

    expect(controller.users).toBeTruthy();
    expect(controller.users).toBeGreaterThan(0);

    expect(component).toBeTruthy();
  });

  it('Los usuarios se renderizaron correctamente en la vista', () => {
    const fixture = TestBed.createComponent(StudentListComponent);
    const view = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(view.querySelector('div')).toBeTruthy();

    expect(component).toBeTruthy();
  });
});
