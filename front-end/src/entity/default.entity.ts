import { ShareDefaultEntity } from '@share';
import { ClassDataSource, PropertyDataSource } from 'cyia-ngx-common/repository';
import { of } from 'rxjs';
@ClassDataSource({
  source: () => {
    return of({ id: '1', name: '222' });
  },
})
export class DefaultEntity extends ShareDefaultEntity {
  @PropertyDataSource({
    source: (http, injector, result) => {
      return of(Object.keys(result).every((key) => key === 'id' || key === 'name') && Object.keys(result).length === 2);
    },
  })
  twoParams: boolean;
}
