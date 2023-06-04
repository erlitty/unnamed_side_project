import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";

export interface ITvPageProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<ITvPageStyleProps, ITvPageStyles>;
}

export interface ITvPageStyles {
    root?: IStyle;
}

export interface ITvPageStyleProps {
    classNames?: string;
}
