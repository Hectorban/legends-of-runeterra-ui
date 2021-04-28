import React from 'react';

import './KeyCard.scss'
const KeyCard = ({card, order}) => {
    const keyCardImage = `https://dd.b.pvp.net/latest/set${card.set}/es_mx/img/cards/${card.code}.png`
    const animationOrder = {"--order": order+1}

    return (
        <div className="key-card-container" style={animationOrder}>
            <img className="key-card" src={keyCardImage}/>
        </div>
    );
};

export default KeyCard;