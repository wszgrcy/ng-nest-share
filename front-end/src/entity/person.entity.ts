import { PersonShare } from '../../../share/person.entity';
import { ClassDataSource, PropertyDataSource } from 'cyia-ngx-common/repository';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
const sexMap = {
  1: '男',
  0: '女',
};
@ClassDataSource({
  source: (http) => {
    return http.get('api/list');
  },
})
export class PersonEntity extends PersonShare {
  @PropertyDataSource({
    source: (http, injector, result) => {
      return of(result);
    },
    itemSelect: (item, key, index, result, http, injector) => {
      return injector
        .get(AppService)
        .getDepartment()
        .pipe(
          map((list) => {
            return list.find((item) => item.value === result[index].department).label;
          }),
        );
    },
  })
  departmentName;
  @PropertyDataSource({
    source: (http, injector, result) => {
      return of(result);
    },
    itemSelect: (item, key, index, result) => {
      return of(sexMap[item.sex]);
    },
  })
  sexName;
  @PropertyDataSource({
    source: (http, injector, result) => {
      return of(result);
    },
    itemSelect: (item, key, index, result) => {
      return of(item.age > 35 ? '超龄' : '');
    },
  })
  overAge: string;
}
