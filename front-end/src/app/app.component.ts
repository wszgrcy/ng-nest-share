import { Component } from '@angular/core';
import { version } from '@share';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { DefaultEntity } from '../entity/default.entity';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DepartmentList } from '../entity/dictionary.entity';
import { PersonEntity } from '../entity/person.entity';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = version;
  departments: DepartmentList[] = [];
  list: PersonEntity[] = [];
  constructor(private repository: CyiaRepositoryService, private http: HttpClient, private appService: AppService) {
    this.appService.getDepartment().subscribe((list) => {
      this.departments = list;
    });

    this.repository.findMany(PersonEntity).subscribe((list) => {
      console.log(list);
      this.list = list;
    });
  }
  update(form: NgForm) {
    this.http.post('api/add', form.value).subscribe((e) => {
      console.log(e);
    });
  }
}
