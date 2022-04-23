import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { CourseService } from '../../core/services/course.service';
import { InscriptionService } from '../../core/services/inscription.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Inscription } from '../../core/models/inscription.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  contentLoaded: Promise<boolean> | undefined;
  displayedColumns: string[] = [
    'idInscription',
    'course',
    'inscriptionDate',
    'action',
  ];
  idUser!: number;
  userDetails: any;
  notifier = new Subject();
  userInscriptions: Inscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private inscriptionService: InscriptionService
  ) {}

  async ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.notifier))
      .subscribe((params: ParamMap) => {
        let _id: string | null = params.get('id');
        this.idUser = _id != null ? parseInt(_id) : 0;
        this.userService.getStudentById$(this.idUser).subscribe(userDetails => {
          this.userDetails = userDetails;
          this.contentLoaded = Promise.resolve(true);
        });
        this.inscriptionService
          .getCoursesByStudent$(this.idUser)
          .subscribe(inscriptions => {
            this.userInscriptions = inscriptions;
          });
      });
  }

  NgOnDestroy() {
    this.notifier.next(0);
    this.notifier.complete();
  }

  test(action: any, data: any) {
    console.log(action, data);
  }
}
