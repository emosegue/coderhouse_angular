import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionService } from 'src/app/core/services/inscription.service';
import { UserService } from 'src/app/core/services/user.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDialogComponent } from "./student-dialog.component";

describe("StudentDialogComponent", () => {
  let component: StudentDialogComponent;
  let fixture: ComponentFixture<StudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentDialogComponent],
      schemas: [SharedModule,HttpClientTestingModule],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      },InscriptionService, UserService],
      imports: [ReactiveFormsModule,MatSelectModule,MatInputModule,BrowserAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Los usuarios se asignaron correctamente al dialog', () => {
    const fixture = TestBed.createComponent(StudentDialogComponent);
    const controller = fixture.componentInstance;
    expect(controller.data);
  });

  
})