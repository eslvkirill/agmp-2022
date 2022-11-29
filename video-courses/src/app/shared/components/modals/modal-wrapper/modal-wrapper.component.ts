import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ModalConfig } from '../../../types';
import { MessageInformation } from '../../../types/modal.interface';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss'],
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
    const { title, messageText, btnActionRes, btnCloseRes } = this
      .messageInformation as MessageInformation;

    this.title = title || 'Modal';
    this.messageText = messageText;
    this.btnActionRes = btnActionRes || 'Yes';
    this.btnCloseRes = btnCloseRes || 'No';
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
