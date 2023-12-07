import { Image, classNamesFunction } from "@fluentui/react";
import { ReactElement, useState } from "react";
import * as React from "react";
import { ICardStyleProps, ICardStyles, ICardProps } from "./card.types";

const getClassNames = classNamesFunction<ICardStyleProps, ICardStyles>();

export function CardBase (props: ICardProps): ReactElement {
    const classNames = getClassNames(props.styles);


    return (
        <div className={classNames.root}>
            <div className={classNames.title}>
               {props.title}
            </div>
            <div className={classNames.image}>
                <Image 
                    src={props.imageLink}
                    width={props.imageWidth}
                />
            </div>
            <div className={classNames.description}>
                {props.description}
            </div>
        </div>
    );
}
