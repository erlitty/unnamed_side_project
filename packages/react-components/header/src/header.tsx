import { styled } from "@fluentui/react";
import { IHeaderProps, IHeaderStyleProps, IHeaderStyles } from './header.types';
import { HeaderStyles } from './header.styles';
import { HeaderBase } from "./header.base";

export const Header = styled<IHeaderProps, IHeaderStyleProps, IHeaderStyles>(HeaderBase, HeaderStyles)