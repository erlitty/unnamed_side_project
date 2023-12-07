import { Modal, classNamesFunction, initializeIcons } from "@fluentui/react";
import { ReactElement, useState } from "react";
import * as React from "react";
import { IModalStyleProps, IModalStyles, IModalProps } from "./modal.types";

const getClassNames = classNamesFunction<IModalStyleProps, IModalStyles>();
initializeIcons();

export function ModalBase (props: IModalProps): ReactElement {
    const classNames = getClassNames(props.styles);

    function handleSubmit(name: string, description: string) {
        let newMovie = {
            name: name,
            description: description,
        }
        // TODO: Add to the redux store
    }

    return (
        <div className={classNames.root}>
            <Modal
                isOpen={props.isOpen}
            >
                <div>Add new item</div>
                <form onSubmit={() => handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id="name"></input><br></br>
                    <label>Description:</label>
                    <input type="text" id="description"></input><br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </Modal>
        </div>
    );
}
