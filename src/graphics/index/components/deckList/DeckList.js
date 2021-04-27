import React from 'react';
import Card from "../card"

import "./DeckList.scss"

const DeckList = ({deck}) => {
    return (
        <div className="deck-container">
        {deck.map((card, i) =>{
            const { code, count, set, id, faction } = card
            const cardColumn = i < 15 ? 1 : 2
            return (
                <Card
                key={i}
                cardNumber = {i}
                code = {code}
                count = {count}
                set = {set}
                id = {id}
                faction = {faction}
                cardColumn = {cardColumn}
                />
            )
        })}
        </div>
    );
};

export default DeckList;