import { styled } from "@fluentui/react";
import { IAddButtonProps, IAddButtonStyleProps, IAddButtonStyles } from './addButton.types';
import { AddButtonStyles } from './addButton.styles';
import { AddButtonBase } from "./addButton.base";

export const AddButton = styled<IAddButtonProps, IAddButtonStyleProps, IAddButtonStyles>(AddButtonBase, AddButtonStyles)