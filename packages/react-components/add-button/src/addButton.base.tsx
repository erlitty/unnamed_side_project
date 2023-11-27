import { classNamesFunction, initializeIcons } from "@fluentui/react";
import { ReactElement, useState } from "react";
import { tabs } from "@self/variables";
import * as React from "react";
import { IAddButtonStyleProps, IAddButtonStyles, IAddButtonProps } from "./addButton.types";
import { IconButton } from '@fluentui/react/lib/Button';

const getClassNames = classNamesFunction<IAddButtonStyleProps, IAddButtonStyles>();
initializeIcons();

export function AddButtonBase (props: IAddButtonProps): ReactElement {
    const classNames = getClassNames(props.styles);

    return (
        <div className={classNames.root}>
            <IconButton iconProps={{ iconName: 'Add' }} title="Add" ariaLabel="Add" onClick={props.onClick}/>
        </div>
    );
}
