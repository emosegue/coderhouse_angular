import { Component } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ToolbarItems } from './toolbar-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toolbarItems: any[] = ToolbarItems;
  title = 'PrimerEntregaMosegue';
  sidenavWidth = 18;
  sidenavStatus = true;

  constructor() {}
}
