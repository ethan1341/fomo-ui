import React, {useEffect, useState} from 'react';
import getCards from "../../service/cards-service";
import {Card} from "../../type/card";
import {useHistory} from 'react-router';

type Props = {
    selectedSet?: number;
};

export const CardDisplay: React.FC<Props> = ({selectedSet}) => {
    const [allCards, setCards] = useState<Card[]>([])
    const history = useHistory();
    console.log(history,'this is history')
    useEffect(() => {
            (async function () {
                if (selectedSet) {
                    const cardData = await getCards(selectedSet)
                    console.log(cardData.rows,'woot')
                    setCards(cardData.rows);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                } else {
                    console.log(selectedSet, 'woot3453')
                }
            }())
        }
        , [selectedSet])

    const GoToDetails = (card: any) => {
        history.push({
            pathname: '/card-detail',
            state: { card }
        })
    }


    return (
        <div>
            {allCards.map(card => { // @ts-ignore
                return <>
                    <div onClick={() => GoToDetails(card)}>
                        <h2>{card.cleanName}</h2>
                        <img src={card.imageUrl}/>
                    </div>
                </>
            })}
        </div>
    )
}