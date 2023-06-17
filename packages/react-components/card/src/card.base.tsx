import { Image, ImageFit, Label, classNamesFunction } from "@fluentui/react";
import { ICardProps, ICardStyleProps, ICardStyles } from "./card.types";
import { ReactElement } from "react";
import * as React from "react";

const getClassNames = classNamesFunction<ICardStyleProps, ICardStyles>();

export function CardBase (props: ICardProps): ReactElement {
    const classNames = getClassNames(props.styles);

    return (
        <div className={classNames.root}>
            <Image src={props.imageSrc} imageFit={ImageFit.contain} className={classNames.imageContainer} />
            <Label className={classNames.title}>{props.title}</Label>
            <Label className={classNames.subtitle}>{props.subtitle}</Label>
        </div>
    );
}
