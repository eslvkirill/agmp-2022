import { TestBed } from '@angular/core/testing';
import { HeaderModule } from './header.module';

describe('HeaderModule', () => {
  let pipe: HeaderModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HeaderModule] });
    pipe = TestBed.inject(HeaderModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
