import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfAuthenticatedDirective } from './if-authenticated.directive';

@Component({
  template: `[appIfAuthenticated]="true"`,
})
class TestComponent {}

describe('IfAuthenticatedDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    element = fixture.debugElement;
  });

  it('should create an instance', () => {
    const directive = IfAuthenticatedDirective;
    expect(directive).toBeTruthy();
  });
});
