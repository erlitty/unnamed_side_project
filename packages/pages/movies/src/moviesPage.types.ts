import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface IMoviesPageProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<IMoviesPageStyleProps, IMoviesPageStyles>;
}

export interface IMoviesPageStyles {
    root?: IStyle;
}

export interface IMoviesPageStyleProps {
    classNames?: string;
}
