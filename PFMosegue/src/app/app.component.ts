import { Component, OnInit } from '@angular/core';
import { ToolbarItems } from './toolbar-items';
import { AuthenticationService } from './core/services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectorActiveSession } from './auth/state/selectors/auth.selector';
import { User } from './core/models/user.model';
import { closeSession } from './auth/state/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  toolbarItems: any[] = ToolbarItems;
  title = 'Proyecto Final Mosegue';
  sidenavWidth = 18;
  sidenavStatus = true;
  activeUser = {} as User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(selectorActiveSession).subscribe(session => {
      if (session) {
        this.activeUser = session.activeUser;
      }
    });
  }

  hasLoggedUser() {
    return this.activeUser.idUser !== 0;
  }

  hasAdminLogged() {
    if (this.activeUser.accountType !== undefined) {
      return this.activeUser.accountType.includes(1);
    } else return false;
  }

  logout() {
    this.store.dispatch(closeSession());
    this.router.navigate(['login']);
  }
}
