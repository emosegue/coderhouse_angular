import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription } from 'rxjs';
import { InscriptionService } from '../../core/services/inscription.service';
import { Inscription } from '../../core/models/inscription.model';
import { InscriptionDialogComponent } from '../inscription-dialog/inscription-dialog.component';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.css'],
})
export class InscriptionListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'idInscription',
    'course',
    'student',
    'inscriptionDate',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table?: MatTable<any>;
  inscriptions$!: Observable<Inscription[]>;
  inscriptions: Inscription[] = [];
  subscription!: Subscription;
  constructor(
    private dialog: MatDialog,
    private inscriptionService: InscriptionService,
    public iziToast: Ng2IzitoastService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.inscriptions$ = this.inscriptionService.getInscriptions$();
    this.subscription! = this.inscriptions$.subscribe(inscriptions => {
      this.inscriptions = inscriptions;
    });
  }

  openDialog(action: any, obj: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = true;
    obj.action = action;
    dialogConfig.data = obj;
    if (action === 'Update' || action === 'Add') {
      dialogConfig.width = '700px';
      dialogConfig.height = '300px';
    } else {
      dialogConfig.width = '500px';
      dialogConfig.height = '200px';
    }

    const dialogRef = this.dialog.open(
      InscriptionDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addInscription(result.data);
      } else if (result.event == 'Update') {
        this.updateInscription(result.data);
      } else if (result.event == 'Delete') {
        this.deleteInscription(result.data);
      }
    });
  }

  addInscription(result: any) {
    let newInscription = {} as Inscription;
    newInscription.idInscription = this.inscriptionService.getNewId();
    newInscription.student = result.student;
    newInscription.course = result.course;
    newInscription.transactionDate = new Date();
    newInscription.transactionUser = {} as User;
    this.inscriptionService
      .addInscription(newInscription)
      .subscribe(inscription => {
        this.inscriptions.push(inscription);
        this.table?.renderRows();
        this.showIziToast(
          `La inscripcion del alumno  ${result.student.firstName} ${result.student.lastName} al curso ${result.course.name} se cargo correctamente`
        );
      });
  }

  updateInscription(result: any) {
    this.inscriptionService.updateInscription(result).subscribe(inscription => {
      this.inscriptions[
        this.inscriptions.findIndex(
          c => c.idInscription === result.idInscription
        )
      ] = result;
      this.table?.renderRows();
      this.showIziToast(`La inscripcion se ha actualizado `);
    });
  }

  deleteInscription(result: any): void {
    this.inscriptionService.deleteInscription(result.idInscription).subscribe({
      next: deletedInscription => {
        this.inscriptions = this.inscriptions.filter(
          inscription =>
            inscription.idInscription !== deletedInscription.idInscription
        );
        this.table?.renderRows();
        this.showIziToast(
          `La inscripcion del alumno  ${result.student.firstName} ${result.student.lastName} al curso ${result.course.name} se elimino`
        );
      },
      error: error => {
        console.error('No se pudo eliminar la inscripcion', error);
      },
    });
  }

  hasAdminLogged() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.accountType ? user.accountType.includes(1) : false;
  }

  showIziToast(itMsg: string) {
    this.iziToast.show({
      title: itMsg,
      timeout: 2000,
      color: 'green',
      position: 'topCenter',
    });
  }
}
