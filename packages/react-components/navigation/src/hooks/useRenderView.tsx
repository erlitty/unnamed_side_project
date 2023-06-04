import { ReactElement } from 'react';
import { TabList } from '../navigation.types';
import * as React from "react";

interface IRenderViewReturnType {
    view: React.ReactElement;
}


export function useRenderView(tab: TabList): IRenderViewReturnType {
    let view: ReactElement;
    switch(tab) {
        case "Movies":
            view = <span>Movies page</span>; // TODO: Movies page
            break;
        case 'TV':
            view = <span>TV page</span>; // TODO: TV page
            break;
        case 'Characters':
            view = <span>Characters page</span>; // TODO: Characters page
            break;
        default:
            view = <span>Invalid page</span>
    }
    return {view};
}