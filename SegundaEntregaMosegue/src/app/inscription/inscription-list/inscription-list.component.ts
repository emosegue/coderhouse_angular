import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription } from 'rxjs';
import { InscriptionService } from '../../core/services/inscription.service';
import { Inscription } from '../../core/models/inscription.model';

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
    private InscriptionService: InscriptionService,
    public iziToast: Ng2IzitoastService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.inscriptions$ = this.InscriptionService.getInscriptions$();
    this.subscription! = this.inscriptions$.subscribe(inscriptions => {
      this.inscriptions = inscriptions;
    });
  }

  test(action: any, data: any) {
    console.log(action, data);
    console.log(this.inscriptions);
  }
}
