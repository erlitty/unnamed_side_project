import { styled } from "@fluentui/react";
import { INavigationProps, INavigationStyleProps, INavigationStyles } from './navigation.types';
import { NavigationStyles } from './navigation.styles';
import { NavigationBase } from "./navigation.base";

export const Navigation = styled<INavigationProps, INavigationStyleProps, INavigationStyles>(NavigationBase, NavigationStyles)