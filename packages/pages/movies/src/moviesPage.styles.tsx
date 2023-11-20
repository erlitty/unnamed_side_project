import { IMoviesPageStyleProps, IMoviesPageStyles } from "./moviesPage.types";

export function MoviesPageStyles(props: IMoviesPageStyleProps): IMoviesPageStyles {
    return {
        root: {
            display: 'flex',
            alignItems: 'flex-start',
        }
    }
}