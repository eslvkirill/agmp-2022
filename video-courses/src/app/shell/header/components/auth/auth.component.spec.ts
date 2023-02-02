import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { faSignOut, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AuthComponent],
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('loginIcon has default value', () => {
    expect(component.loginIcon).toEqual(faUserLarge);
  });

  it('logoffIcon has default value', () => {
    expect(component.logoffIcon).toEqual(faSignOut);
  });
});
