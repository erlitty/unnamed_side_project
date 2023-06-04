import { ReactElement } from 'react';
import { TabList } from '../navigation.types';
import * as React from "react";
import { MoviesPage, TvPage, CharactersPage } from "@self/pages";


interface IRenderViewReturnType {
    view: React.ReactElement;
}


export function useRenderView(tab: TabList): IRenderViewReturnType {
    let view: ReactElement;
    switch(tab) {
        case "Movies":
            view = <MoviesPage />;
            break;
        case 'TV':
            view = <TvPage />;
            break;
        case 'Characters':
            view = <CharactersPage />;
            break;
        default:
            view = <span>Invalid page</span>
    }
    return {view};
}