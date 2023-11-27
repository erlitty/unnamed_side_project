import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface IModalProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<IModalStyleProps, IModalStyles>;
    isOpen: boolean;
}

export interface IModalStyles {
    root?: IStyle;
}

export interface IModalStyleProps {
    classNames?: string;
}
