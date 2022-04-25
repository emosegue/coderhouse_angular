import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../core/services/inscription.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Inscription } from '../../core/models/inscription.model';

@Component({
  selector: 'app-inscription-detail',
  templateUrl: './inscription-detail.component.html',
  styleUrls: ['./inscription-detail.component.css'],
})
export class InscriptionDetailComponent implements OnInit {
  displayedColumns: string[] = [
    'idInscription',
    'inscription',
    'inscriptionDate',
    'action',
  ];
  idInscription!: number;
  inscriptionDetail = {} as Inscription;
  notifier = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private inscriptionService: InscriptionService
  ) {}

  async ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.notifier))
      .subscribe((params: ParamMap) => {
        let _id: string | null = params.get('id');
        this.idInscription = _id != null ? parseInt(_id) : 0;
        this.inscriptionService
          .getInscriptionById$(this.idInscription)
          .subscribe(inscriptionDetails => {
            this.inscriptionDetail = inscriptionDetails;
          });
      });
  }

  NgOnDestroy() {
    this.notifier.next(0);
    this.notifier.complete();
  }
}
