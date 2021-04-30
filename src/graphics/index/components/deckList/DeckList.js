import React from 'react';
import Card from "../card"

import "./DeckList.scss"

const DeckList = ({deck}) => {
    return (
        <div className="deck-container">
        {deck.map((card, i) =>{i
            const { code, count, set, id, faction } = card
            return (
                <Card
                key={i}
                cardNumber = {i}
                code = {code}
                count = {count}
                set = {set}
                id = {id}
                faction = {faction}
                />
            )
        })}
        </div>
    );
};

export default DeckList;