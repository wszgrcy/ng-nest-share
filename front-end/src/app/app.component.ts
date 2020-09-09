import { Component } from '@angular/core';
import { version } from '@share';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { DefaultEntity } from '../entity/default.entity';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = version;
  constructor(private repository: CyiaRepositoryService, private http: HttpClient) {
    this.repository.findOne(DefaultEntity).subscribe((res) => {
      console.log(res);
    });
    this.http.get('api/version').subscribe((e) => {
      console.log(e);
    });
  }
}
