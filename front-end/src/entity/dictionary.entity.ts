import { ClassDataSource } from 'cyia-ngx-common/repository';

export class DictionaryEntity {
  label: string;
  value: any;
}
@ClassDataSource({
  source: (http) => {
    return http.get('api/department-list');
  },
})
export class DepartmentList implements DictionaryEntity {
  label: string;
  value: number;
}
