import { Pivot, PivotItem, classNamesFunction } from "@fluentui/react";
import { INavigationProps as INavigationProps, INavigationStyleProps as INavigationStyleProps, INavigationStyles as INavigationStyles, TabList } from "./navigation.types";
import { ReactElement, useState } from "react";
import { tabs } from "@self/variables";
import * as React from "react";
import { useRenderView } from "./hooks/useRenderView";

const getClassNames = classNamesFunction<INavigationStyleProps, INavigationStyles>();

export function NavigationBase (props: INavigationProps): ReactElement {
    const classNames = getClassNames(props.styles);
    const [currentView, setCurrentView] = useState('Movies');

    const { view } = useRenderView(currentView as TabList);

    function onTabClick(tab: TabList) {
        console.log(tab);
        setCurrentView(tab);
    }


    return (
        <Pivot onLinkClick={(tab: PivotItem) => onTabClick(tab.props.headerText as TabList)}>
            {tabs.map((tab) => {
                return <PivotItem headerText={tab} key={tab}>
                    {view}
                </PivotItem>
            })}
        </Pivot>
    );
}
