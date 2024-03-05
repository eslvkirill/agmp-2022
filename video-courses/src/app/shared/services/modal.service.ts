import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalWrapperComponent } from '../components/modals/modal-wrapper/modal-wrapper.component';
import { ModalConfig } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private readonly defaultWidth = '550px';
  private readonly defaultTopPosition = '80px';

  constructor(private dialog: MatDialog) {}

  openDialog<T>(
    modalConfig: ModalConfig<T>
  ): MatDialogRef<ModalWrapperComponent<T>> {
    const { messageInformation } = modalConfig;

    return this.dialog.open<ModalWrapperComponent<T>>(ModalWrapperComponent, {
      data: {
        messageInformation,
      },
      position: {
        top: this.defaultTopPosition,
      },
      width: this.defaultWidth,
    });
  }
}
