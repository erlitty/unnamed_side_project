import { ICardStyleProps, ICardStyles } from "./card.types";

export function CardStyles(props: ICardStyleProps): ICardStyles {
    return {
        root: {
            fontSize: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '300px',
            padding: '10px',
            margin: '5px',
            border: '2px solid black',
            borderRadius: '10px',
        },
        title: {
            fontSize: '30px',
            marginBottom: '10px',
        },
        image: {

        },
        description: {
            fontSize: '16px',
            marginTop: '20px',
        },
    }
}