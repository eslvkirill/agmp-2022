import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderColorDirective } from './border-color.directive';

@Component({
  template: `[appBorderColor]="${new Date()}"`,
})
class TestComponent {}

describe('BorderColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    element = fixture.debugElement;
  });

  it('should create an instance', () => {
    const directive = new BorderColorDirective(element);
    expect(directive).toBeTruthy();
  });
});
