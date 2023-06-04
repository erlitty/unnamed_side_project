import { classNamesFunction } from "@fluentui/react";
import { IMoviesPageProps, IMoviesPageStyleProps, IMoviesPageStyles } from "./moviesPage.types";
import { ReactElement } from "react";
import * as React from "react";

const getClassNames = classNamesFunction<IMoviesPageStyleProps, IMoviesPageStyles>();

export function MoviesPageBase (props: IMoviesPageProps): ReactElement {
    const classNames = getClassNames(props.styles);

    return (
        <span>Movies page</span>
    );
}
