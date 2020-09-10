import { Component, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { version } from '@share';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DepartmentList } from 'src/entity/dictionary.entity';
import { PersonEntity } from 'src/entity/person.entity';
import { AppService } from '../app.service';
import { timer } from 'rxjs';
import { LoadingHint, CyiaLoadingHintUninstall } from 'cyia-ngx-common/loading-hint';
import { LoadingShowComponent } from '../loading-show/loading-show.component';
@Component({
  selector: 'app-my-decorator',
  templateUrl: './my-decorator.component.html',
  styleUrls: ['./my-decorator.component.scss'],
})
export class MyDecoratorComponent {
  version = version;
  departments: DepartmentList[] = [];
  list: PersonEntity[] = [];
  @ViewChild('block', { read: ViewContainerRef }) blockContainer: ViewContainerRef;
  constructor(private repository: CyiaRepositoryService, private http: HttpClient, private appService: AppService) {
    this.appService.getDepartment().subscribe((list) => {
      this.departments = list;
    });
    this.getList();
  }
  update(form: NgForm) {
    this.http.post('api/add', form.value).subscribe((e) => {
      this.getList();
    });
  }
  getList() {
    this.repository.findMany(PersonEntity).subscribe((list) => {
      this.list = list;
    });
  }
  @LoadingHint({
    container: (type: MyDecoratorComponent) => type.blockContainer,
    component: LoadingShowComponent,
    timeout: 4000,
    uninstallMod: CyiaLoadingHintUninstall.default,
  })
  load() {
    console.log('点击', this.blockContainer);
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 3000);
    });
  }
  @LoadingHint({
    container: (type: MyDecoratorComponent) => type.blockContainer,
    component: LoadingShowComponent,
    timeout: 4000,
    uninstallMod: CyiaLoadingHintUninstall.component,
  })
  loadControl(){

  }
}
