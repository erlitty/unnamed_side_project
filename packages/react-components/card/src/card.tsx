import { styled } from "@fluentui/react";
import { ICardProps, ICardStyleProps, ICardStyles } from './card.types';
import { CardStyles } from './card.styles';
import { CardBase } from "./card.base";

export const Card = styled<ICardProps, ICardStyleProps, ICardStyles>(CardBase, CardStyles)