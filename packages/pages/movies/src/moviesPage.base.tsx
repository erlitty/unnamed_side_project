import { classNamesFunction } from "@fluentui/react";
import { IMoviesPageProps, IMoviesPageStyleProps, IMoviesPageStyles } from "./moviesPage.types";
import { ReactElement } from "react";
import * as React from "react";
import { Card, ICardProps } from "@self/react-components";

const getClassNames = classNamesFunction<IMoviesPageStyleProps, IMoviesPageStyles>();

export function MoviesPageBase (props: IMoviesPageProps): ReactElement {
    const classNames = getClassNames(props.styles);

    const cardProps: ICardProps = {
        imageSrc: 'https://cdn.shopify.com/s/files/1/0445/8600/8737/products/0fa342e3-605a-4b5d-b4c3-c52d4d30efcb_7b291b9e-eb84-4039-bfc8-c5fd29198b4a.jpg?v=1671065453',
        title: 'The best movie',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis aliquam suscipit. Donec pellentesque ultrices urna eu posuere. Nulla elementum lacus luctus, imperdiet tellus eget, ullamcorper mauris. Suspendisse lacinia a massa sagittis dapibus. Duis vestibulum sapien ut mollis cursus. Curabitur eget laoreet neque.',
    }

    return (
        <div className={classNames.root}>
            <Card {...cardProps} />
        </div>
    );
}
