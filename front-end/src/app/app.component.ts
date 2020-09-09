import { Component } from '@angular/core';
import { a } from '@help';
import { version } from '@share';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = version;
}
