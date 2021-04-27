import React from 'react';

import './KeyCards.scss'

const KeyCards = ({deck}) => {
    console.log(deck)
    const keyCard1 = `https://dd.b.pvp.net/latest/set${deck[0].set}/es_mx/img/cards/${deck[0].code}.png`
    const keyCard2 = `https://dd.b.pvp.net/latest/set${deck[1].set}/es_mx/img/cards/${deck[1].code}.png`
    const keyCard3 = `https://dd.b.pvp.net/latest/set${deck[2].set}/es_mx/img/cards/${deck[2].code}.png`

    return (
        <div className="key-cards-container">
            <img className="key-card" src={keyCard1}/>
            <img className="key-card" src={keyCard2}/>
            <img className="key-card" src={keyCard3}/>
        </div>
    );
};

export default KeyCards;