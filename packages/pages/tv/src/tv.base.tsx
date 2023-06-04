import { classNamesFunction } from "@fluentui/react";
import { ITvPageProps, ITvPageStyleProps, ITvPageStyles } from "./tv.types";
import { ReactElement } from "react";
import * as React from "react";

const getClassNames = classNamesFunction<ITvPageStyleProps, ITvPageStyles>();

export function TvPageBase (props: ITvPageProps): ReactElement {
    const classNames = getClassNames(props.styles);

    return (
        <span>Tv page</span>
    );
}
