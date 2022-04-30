import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/services/user.service';
import { InscriptionListComponent } from './inscription-list.component';

describe('StudentListComponent', () => {
  let component: InscriptionListComponent;
  let fixture: ComponentFixture<InscriptionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionListComponent],
      imports: [SharedModule,HttpClientTestingModule],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Las inscripciones se asignaron correctamente en el controlador', () => {
    const fixture = TestBed.createComponent(InscriptionListComponent);
    const controller = fixture.componentInstance;
    fixture.detectChanges();
    setTimeout(() => {
      expect(controller.inscriptions.length).toBeGreaterThan(0);
    }, 2000);
  });

  it('Las inscripciones se renderizaron correctamente en la vista', () => {
    const fixture = TestBed.createComponent(InscriptionListComponent);
    const view = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(view.querySelector('div')).toBeTruthy();
  });
});
