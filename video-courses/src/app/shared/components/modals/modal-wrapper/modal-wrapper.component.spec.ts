import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWrapperComponent } from './modal-wrapper.component';

describe('ModalWrapperComponent', () => {
  let component: ModalWrapperComponent<unknown>;
  let fixture: ComponentFixture<ModalWrapperComponent<unknown>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
