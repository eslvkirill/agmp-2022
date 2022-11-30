import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '../../../shell/header/services/auth.service';

@Directive({
  selector: '[appIfAutentificated]',
})
export class IfAutentificatedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) // private authService: AuthService
  {}

  // ngOnInit(): void {
  //   this.isAuthenticated = this.authService.isAuthenticated();
  //   console.log(this.isAuthenticated);
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.setAuth();
  // }

  // private setAuth(): void {
  //   console.log(this.isAuthenticated);

  //   if (this.isAuthenticated) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //     return;
  //   }
  //   this.viewContainer.clear();
  // }

  @Input('appIfAutentificated') set isAuthenticated(isAuthenticated: boolean) {
    if (isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
  }
}
