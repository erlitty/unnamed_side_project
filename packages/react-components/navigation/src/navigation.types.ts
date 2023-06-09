import { IStyle, IStyleFunctionOrObject } from "@fluentui/react";
import { tabs } from "@self/variables";

export interface INavigationProps {
    classNames?: string;
    styles?: IStyleFunctionOrObject<INavigationStyleProps, INavigationStyles>;
}

export interface INavigationStyles {
    root?: IStyle;
}

export interface INavigationStyleProps {
    classNames?: string;
}

export type TabList = 'Movies' | 'TV' | "Characters"
