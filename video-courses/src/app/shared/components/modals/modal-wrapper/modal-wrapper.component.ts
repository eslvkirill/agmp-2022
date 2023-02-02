import { ChangeDetectionStrategy, Component, Inject, OnInit, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageInformation, ModalConfig } from '../../../types';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalWrapperComponent<T> implements OnInit {
  messageInformation?: MessageInformation;
  title?: string;
  messageText?: string;
  btnActionRes?: string;
  btnCloseRes?: string;

  constructor(
    private modalRef: MatDialogRef<T>,
    @Inject(MAT_DIALOG_DATA) private dialogData: ModalConfig<T>
  ) {
    this.messageInformation = this.dialogData?.messageInformation;
  }

  ngOnInit(): void {
    const {
      title = 'Modal',
      messageText = undefined,
      btnActionRes = 'Yes',
      btnCloseRes = 'No',
    } = this.messageInformation || {};

    this.title = title;
    this.messageText = messageText;
    this.btnActionRes = btnActionRes;
    this.btnCloseRes = btnCloseRes;
  }

  closeModal(result: boolean, messageInformation?: MessageInformation): void {
    this.close({ value: { result, messageInformation } });
  }

  onCancel(): void {
    this.close({ value: { result: false } });
  }

  private close<Data>(data?: Data): void {
    this.modalRef.close(data);
  }
}
