import { Injectable } from '@angular/core';
import { CyiaRepositoryService } from 'cyia-ngx-common/repository';
import { DepartmentList } from '../entity/dictionary.entity';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { share, take, switchMap, tap, refCount, publish } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private department$: Observable<DepartmentList[]>;
  constructor(private repository: CyiaRepositoryService) {}

  getDepartment() {
    // console.log(this.department$, '测试');
    if (!this.department$) {
      this.department$ = this.repository.findMany(DepartmentList).pipe(
        take(1),
        // switchMap((val) => new BehaviorSubject(val)),
        share()
      );
    }
    return this.department$;
  }
}
