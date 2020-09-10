import { Component } from '@angular/core';
import { version } from '@share';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { DefaultEntity } from '../entity/default.entity';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DepartmentList } from '../entity/dictionary.entity';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = version;
  departments: DepartmentList[] = [];
  constructor(private repository: CyiaRepositoryService, private http: HttpClient) {
    this.repository.findMany(DepartmentList).subscribe((list) => {
      this.departments = list;
    });
    this.http.get('api/version').subscribe((e) => {
      console.log(e);
    });
  }
  update(form: NgForm) {
    console.log(form.value);
  }
}
