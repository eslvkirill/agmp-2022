import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
import { faPencil, faPlus, faTrash, IconDefinition, } from '@fortawesome/free-solid-svg-icons';
import { ButtonType } from '../../enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: ButtonType = ButtonType.Common;

  icon: IconDefinition | null;

  ngOnInit(): void {
    this.icon = this.getIcon();
  }

  private getIcon(): IconDefinition | null {
    switch (this.type) {
      case ButtonType.Add:
        return faPlus;
      case ButtonType.Edit:
        return faPencil;
      case ButtonType.Delete:
        return faTrash;
      default:
        return null;
    }
  }
}
