import { Component, OnInit } from '@angular/core';
import 'reflect-metadata';
@Component({
  selector: 'app-decorator-extends',
  templateUrl: './decorator-extends.component.html',
  styleUrls: ['./decorator-extends.component.scss'],
})
export class DecoratorExtendsComponent implements OnInit {
  constructor() {
    console.clear();
    const a = new A();
    a.getMemberList();
    const b = new B();
    b.getMemberList();
  }

  ngOnInit() {}
}

class A {
  @registerMember()
  member1;
  @GetMemberList()
  getMemberList() {}
}
class B extends A {
  @registerMember()
  member2;
  @GetMemberList()
  getMemberList() {}
}
function registerMember() {
  return function(target, key) {
    // const list = Reflect.get(target, 'memberList') || [];
    // list.push(key);
    // Reflect.set(target, 'memberList', list);
    const list = Reflect.getOwnMetadata('memberList', target) || [];
    list.push(key);
    Reflect.defineMetadata('memberList', list, target);
  };
}
function GetMemberList() {
  return function(target, key, descriptor: PropertyDescriptor) {
    descriptor.value = () => {
      // const list = Reflect.get(target, 'memberList');
      // console.log(list);
      let list = Reflect.getOwnMetadata('memberList', target);
      while ((target = Reflect.getPrototypeOf(target))) {
        const parentList = Reflect.getOwnMetadata('memberList', target);
        if (parentList) {
          list = list.concat(parentList);
        }
      }
      console.log(list);
    };
  };
}
