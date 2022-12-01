import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfAutentificated]',
})
export class IfAutentificatedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appIfAutentificated') set isAuthenticated(isAuthenticated: boolean) {
    if (isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
  }
}
