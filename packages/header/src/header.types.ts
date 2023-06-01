import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface IHeaderProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<IHeaderStyleProps, IHeaderStyles>;
}

export interface IHeaderStyles {
    root?: IStyle;
}

export interface IHeaderStyleProps {
    classNames?: string;
}