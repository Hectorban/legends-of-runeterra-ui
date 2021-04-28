import React from 'react';

import './KeyCards.scss'
import KeyCard from '../keyCard'

const KeyCards = ({deck}) => {
    const keyCardArray = deck.slice(0,3)

    return (
        <div className="key-cards-container">
            {keyCardArray.map((card, i) => {
                return (
                <KeyCard 
                order = {i}
                key = {i}
                card = {card}
                />
                )
            })}
        </div>
    );
};

export default KeyCards;