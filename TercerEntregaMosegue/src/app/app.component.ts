import { Component } from '@angular/core';
import { ToolbarItems } from './toolbar-items';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toolbarItems: any[] = ToolbarItems;
  title = 'TercerEntregaMosegue';
  sidenavWidth = 18;
  sidenavStatus = true;

  constructor(private authenticationService: AuthenticationService) {}

  hasLoggedUser() {
    return localStorage.getItem('user') !== null;
  }

  hasAdminLogged() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.accountType ? user.accountType.includes(1) : false;
  }

  logout() {
    this.authenticationService.logout();
  }
}
