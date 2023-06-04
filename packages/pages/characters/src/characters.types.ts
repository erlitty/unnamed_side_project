import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface ICharactersPageProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<ICharactersPageStyleProps, ICharactersPageStyles>;
}

export interface ICharactersPageStyles {
    root?: IStyle;
}

export interface ICharactersPageStyleProps {
    classNames?: string;
}
