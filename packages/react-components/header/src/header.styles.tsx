import { IHeaderStyleProps, IHeaderStyles } from "./header.types";

export function HeaderStyles(props: IHeaderStyleProps): IHeaderStyles {
    return {
        root: {
            fontSize: '20px',
        }
    }
}