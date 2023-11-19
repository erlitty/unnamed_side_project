import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface IAddButtonProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<IAddButtonStyleProps, IAddButtonStyles>;
}

export interface IAddButtonStyles {
    root?: IStyle;
}

export interface IAddButtonStyleProps {
    classNames?: string;
}
