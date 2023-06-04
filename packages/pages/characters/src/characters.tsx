import { styled } from "@fluentui/react";
import { ICharactersPageProps, ICharactersPageStyleProps, ICharactersPageStyles } from './characters.types';
import { CharactersPageStyles } from './characters.styles';
import { CharactersPageBase } from "./characters.base";

export const CharactersPage = styled<ICharactersPageProps, ICharactersPageStyleProps, ICharactersPageStyles>(CharactersPageBase, CharactersPageStyles)