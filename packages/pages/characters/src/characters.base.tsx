import { classNamesFunction } from "@fluentui/react";
import { ICharactersPageProps, ICharactersPageStyleProps, ICharactersPageStyles } from "./characters.types";
import { ReactElement } from "react";
import * as React from "react";

const getClassNames = classNamesFunction<ICharactersPageStyleProps, ICharactersPageStyles>();

export function CharactersPageBase (props: ICharactersPageProps): ReactElement {
    const classNames = getClassNames(props.styles);

    return (
        <span>Characters page</span>
    );
}
