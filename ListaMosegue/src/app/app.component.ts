import { Component, OnInit } from '@angular/core';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ListaMosegue';

  constructor() {}

  ngOnInit(): void {
    let content = new ContentComponent();
  }
}
