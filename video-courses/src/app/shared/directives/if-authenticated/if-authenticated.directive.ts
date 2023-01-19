import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appIfAuthenticated') set isAuthenticated(
    isAuthenticated: boolean | null
  ) {
    if (isAuthenticated) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
  }
}
