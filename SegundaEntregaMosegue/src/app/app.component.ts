import { Component } from '@angular/core';
import { ToolbarItems } from './toolbar-items';

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

  constructor() {}
}
