import { Modal, classNamesFunction, initializeIcons } from "@fluentui/react";
import { ReactElement, useState } from "react";
import * as React from "react";
import { IModalStyleProps, IModalStyles, IModalProps } from "./modal.types";

const getClassNames = classNamesFunction<IModalStyleProps, IModalStyles>();
initializeIcons();

export function ModalBase (props: IModalProps): ReactElement {
    const classNames = getClassNames(props.styles);

    return (
        <div className={classNames.root}>
            <Modal />
        </div>
    );
}
