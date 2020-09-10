import { Component, OnInit } from '@angular/core';
import { Agent } from 'http';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss'],
})
export class DecoratorComponent implements OnInit {
  constructor() {
    console.log(Test);
  }

  ngOnInit(): void {}
}
const FONT_STYLE = 'font-size:30px';
const HIGHT_LIGHT_STYLE = 'font-size:30px;color:red';
function ClassDecorator() {
  return (target) => {
    console.log('%c---类装饰器---', HIGHT_LIGHT_STYLE);
    console.log('%cclass->函数', FONT_STYLE, target);
  };
}
function MemberDecorator() {
  return (target, key: string) => {
    console.log('%c---属性装饰器---', HIGHT_LIGHT_STYLE);
    console.log('%cobject->函数.prototype', FONT_STYLE, target);
    console.log(`%c属性名${key}`, FONT_STYLE);
  };
}
function MethodDecorator() {
  return (target, key: string, descriptor: PropertyDescriptor) => {
    console.log('%c---方法装饰器---', HIGHT_LIGHT_STYLE);
    console.log('%cobject->函数.prototype', FONT_STYLE, target);
    console.log(`%c方法名:${key}`, FONT_STYLE);
    console.log(`%c属性描述符`, FONT_STYLE);
    console.table(descriptor);
  };
}
function GetterSetterDecorator() {
  return (target, key: string, descriptor: PropertyDescriptor) => {
    console.log('%c---访问符装饰器---', HIGHT_LIGHT_STYLE);
    console.log('%cobject->函数.prototype', FONT_STYLE, target);
    console.log(`%cget/set属性名:${key}`, FONT_STYLE);
    console.log('%c属性描述符', FONT_STYLE);
    console.table(descriptor);
  };
}
function ParameterDecorator() {
  return (target, key: string, index: number) => {
    console.log('%c---参数装饰器---', HIGHT_LIGHT_STYLE);
    console.log('%cobject->函数.prototype', FONT_STYLE, target);
    console.log(`%c方法名:${key}`, FONT_STYLE);
    console.log(`%c参数索引:${index}`, FONT_STYLE);
  };
}

@ClassDecorator()
class Test {
  @GetterSetterDecorator()
  get name() {
    return '';
  }
  @MemberDecorator()
  member: string;
  @MethodDecorator()
  method(@ParameterDecorator() parameter) {}
}
