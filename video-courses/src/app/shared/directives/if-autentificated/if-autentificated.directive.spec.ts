import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAutentificatedDirective } from './if-autentificated.directive';

@Component({
  template: `[appIfAutentificated]="true"`,
})
class TestComponent {}

describe('IfAutentificatedDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    element = fixture.debugElement;
  });

  it('should create an instance', () => {
    const directive = IfAutentificatedDirective;
    expect(directive).toBeTruthy();
  });
});
