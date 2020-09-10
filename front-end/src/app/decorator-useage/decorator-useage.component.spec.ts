import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorUseageComponent } from './decorator-useage.component';

describe('DecoratorComponent', () => {
  let component: DecoratorUseageComponent;
  let fixture: ComponentFixture<DecoratorUseageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoratorUseageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorUseageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
