import { TestBed } from '@angular/core/testing';
import { ShellModule } from './shell.module';

describe('ShellModule', () => {
  let pipe: ShellModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ShellModule] });
    pipe = TestBed.inject(ShellModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
