import { classNamesFunction } from "@fluentui/react";
import { IHeaderProps, IHeaderStyleProps, IHeaderStyles } from "./header.types";
import { ReactElement } from "react";
import * as React from "react";

const getClassNames = classNamesFunction<IHeaderStyleProps, IHeaderStyles>();

export function HeaderBase (props: IHeaderProps): ReactElement {
    const classNames = getClassNames(props.styles);
    
    return (
        <div className={classNames.root}>Example Text</div>
    );
}
