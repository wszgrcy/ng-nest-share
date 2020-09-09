import { Component } from '@angular/core';
import { version } from '@share';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { DefaultEntity } from '../entity/default.entity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = version;
  constructor(private repository: CyiaRepositoryService) {
    this.repository.findOne(DefaultEntity).subscribe((res) => {
      console.log(res);
    });
  }
}
