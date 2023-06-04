import { styled } from "@fluentui/react";
import { ITvPageProps, ITvPageStyleProps, ITvPageStyles } from './tv.types';
import { TvPageStyles } from './tv.styles';
import { TvPageBase } from "./tv.base";

export const TvPage = styled<ITvPageProps, ITvPageStyleProps, ITvPageStyles>(TvPageBase, TvPageStyles)