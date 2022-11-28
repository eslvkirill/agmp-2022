import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ButtonType } from '../../enums/button.enum';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ButtonComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('type has default value', () => {
    expect(component.type).toEqual(ButtonType.Common);
  });

  it('should ButtonType.Add', () => {
    component.type = ButtonType.Add;

    fixture.detectChanges();

    // const el = fixture.debugElement
    //   .query(By.css('.button__icon'))
    //   .triggerEventHandler('click');

    // console.log(el);

    // expect(component.icon).toEqual(faPlus);

    // expect(component.type).toEqual(ButtonType.Add);
  });
});
