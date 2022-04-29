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
  title = 'SegundaEntregaMosegue';
  sidenavWidth = 18;
  sidenavStatus = true;

  constructor(private authenticationService: AuthenticationService) {}

  hasLoggedUser() {
    return localStorage.getItem('user') !== null;
  }

  logout() {
    this.authenticationService.logout();
  }
}
