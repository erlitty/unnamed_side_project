import { INavigationStyleProps, INavigationStyles } from "./navigation.types";

export function NavigationStyles(props: INavigationStyleProps): INavigationStyles {
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
        },
    }
}