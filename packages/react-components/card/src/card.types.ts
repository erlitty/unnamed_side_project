import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";
import { tabs } from "@self/variables";

export interface ICardProps {
    classNames?: string;
    title?: string;
    imageLink?: string;
    imageWidth?: number;
    description?: string;
    styles?: IStyleFunctionOrObject<ICardStyleProps, ICardStyles>;
}

export interface ICardStyles {
    root?: IStyle;
    title?: IStyle;
    image?: IStyle;
    description?: IStyle;
}

export interface ICardStyleProps {
    classNames?: string;
}
