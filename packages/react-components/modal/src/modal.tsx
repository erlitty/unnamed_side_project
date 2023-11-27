import { styled } from "@fluentui/react";
import { IModalProps, IModalStyleProps, IModalStyles } from './modal.types';
import { ModalStyles } from './modal.styles';
import { ModalBase } from "./modal.base";

export const Modal = styled<IModalProps, IModalStyleProps, IModalStyles>(ModalBase, ModalStyles)