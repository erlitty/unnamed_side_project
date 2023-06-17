import { ICardStyleProps, ICardStyles } from "./card.types";

export function CardStyles(props: ICardStyleProps): ICardStyles {
    return {
        root: {
            width: '300px',
            border: '3px solid #d7d7d9',
            borderRadius: '10px',
        },
        imageContainer: {
            padding: '15px',
        },
        title: {
            fontSize: '28px',
            textAlign: 'center',
        },
        subtitle: {
            fontSize: '15px',
            marginLeft: '5px',
            textAlign: 'center',
        },
    }
}