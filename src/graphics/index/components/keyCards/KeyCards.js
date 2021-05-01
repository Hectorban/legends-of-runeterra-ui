import React from 'react';

import './KeyCards.scss'
import KeyCard from '../keyCard'

const cardInfoRep = nodecg.Replicant("allCardData")

const KeyCards = ({deck}) => {

    const [cardInfo, setCardInfo] = React.useState("");
 
    React.useEffect(() =>{
        const fetchcardInfo = async ()=>{
          await NodeCG.waitForReplicants(cardInfoRep).then(async () => {
            await setCardInfo(cardInfoRep.value)
          });
        const timerfunct = setTimeout(() => {
            setTimer(true)
        }, 6000);
    };
    fetchcardInfo();
    }, []);

    const keyCardArray = new Array
    deck.map((card) =>{
        const cardSupertype = cardInfo[card.code] ? cardInfo[card.code].supertype : undefined
        if(cardSupertype == 'Campeón') {
            keyCardArray.push(card)
        }
    })
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
}
export default KeyCards;