import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface ICardProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<ICardStyleProps, ICardStyles>;
    imageSrc: string;
    title: string;
    subtitle: string;
}

export interface ICardStyles {
    root?: IStyle;
    imageContainer?: IStyle;
    title?: IStyle;
    subtitle?: IStyle;
}

export interface ICardStyleProps {
    classNames?: string;
}
