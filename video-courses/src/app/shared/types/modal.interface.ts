export interface ModalConfig<T> {
  messageInformation?: MessageInformation;
}

export interface MessageInformation {
  title?: string;
  messageText?: string;
  btnActionRes?: string;
  btnCloseRes?: string;
}

export interface ModalResponse {
  value: {
    result: boolean;
    messageInformation?: MessageInformation;
  };
}
