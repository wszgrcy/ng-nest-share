import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-decorator',
  templateUrl: './decorator-useage.component.html',
  styleUrls: ['./decorator-useage.component.scss'],
})
@FormatClass()
export class DecoratorUseageComponent implements OnInit {
  @DefaultValue('默认值')
  value;
  constructor() {
    console.clear();
  }

  ngOnInit(): void {}
  @HandleParams()
  @Log(true)
  update(
    @GetFile()
    data,
  ) {
    console.log('数据', data);
  }
  changeValue(bool) {
    if (bool) {
      this.value = Math.random();
    } else {
      this.value = '';
    }
    console.log(this.value);
  }
}

export function Log(enable: boolean) {
  return function(target, key, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function(...args) {
      if (enable) {
        console.log('被调用了一次上传文件', args[0]);
      }
      return fn.apply(this, args);
    };
  };
}
export function HandleParams() {
  return function(target, key, descirptor: PropertyDescriptor) {
    // 这里最好换成其他方式保存这种关系,这种写法容易导致对象上同名字段被覆盖

    const index = Reflect.get(target, key);
    if (index !== undefined) {
      const fn = descirptor.value;
      descirptor.value = function(...args) {
        const event: Event = args[index];
        args[index] = (event.target as HTMLInputElement).files;
        return fn.apply(this, args);
      };
    }
  };
}
export function DefaultValue(str: string) {
  return function(target, key) {
    // 这里最好换成其他方式保存这种关系,这种写法容易导致对象上同名字段被覆盖
    Reflect.set(target, 'default', { key, value: str });

  };
}
export function GetFile() {
  return function(target, key, index) {
    // 这里最好换成其他方式保存这种关系,这种写法容易导致对象上同名字段被覆盖

    Reflect.set(target, key, index);
  };
}
export function FormatClass() {
  return function(target) {
    return class extends target {
      constructor(...args) {
        super(...args);
        // 这里最好换成其他方式保存这种关系,这种写法容易导致对象上同名字段被覆盖

        const obj = Reflect.get(target.prototype, 'default');
        let val = this[obj.key] || obj.value;
        if (obj) {
          Object.defineProperty(this, obj.key, {
            get() {
              return val;
            },
            set(value) {
              if (value) {
                val = value;
              } else {
                val = obj.value;
              }
            },
          });
        }
      }
    } as any;
  };
}
