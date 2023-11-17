import { ICharactersPageStyleProps, ICharactersPageStyles } from "./characters.types";

export function CharactersPageStyles(props: ICharactersPageStyleProps): ICharactersPageStyles {
    return {
        root: {
            display: 'flex',
            alignItems: 'flex-start',
        }
    }
}