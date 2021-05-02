import React from 'react';

import cardBack from './images/ShurimaBack.png'
import './KeyCard.scss'
const KeyCard = ({card, order}) => {
    const keyCardImage = `https://dd.b.pvp.net/latest/set${card.set}/es_mx/img/cards/${card.code}.png`
    const animationOrder = {"--order": order}
    const [timer, setTimer] = React.useState(false);

    React.useEffect(() => {
        const timerfunct = setTimeout(() => {
            setTimer(true)
        }, 5500);
    }, []);
    if(timer) {
    return (
        <div className="key-card-container" style={animationOrder}>
            <div className='face back'>
                <img className="card-back" src={cardBack}/>
            </div>
            <div className='face front'>
                <img className="key-card" src={keyCardImage}/>
            </div>
        </div>
    );}
    else {
        return (
            <div className="card-placeholder-container">
                <img className="card-placeholder" src={cardBack}/>
            </div>
        );
    }
};

export default KeyCard;