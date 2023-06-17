import { IMoviesPageStyleProps, IMoviesPageStyles } from "./moviesPage.types";

export function MoviesPageStyles(props: IMoviesPageStyleProps): IMoviesPageStyles {
    return {
        root: {
            marginTop: '10px',
            display: 'flex',
        }
    }
}