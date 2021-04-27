import React from 'react';
import "./card.scss"
import manaImage from './images/manacircle.png'

const cardInfoRep = nodecg.Replicant("allCardData")

const Card = ({ cardNumber, code, count, set, id, faction, cardColumn}) => {
    const imageLink = `https://cdn-lor.mobalytics.gg/production/images/cards-preview/${code}.webp`
    const [cardInfo, setCardInfo] = React.useState("");
 
    React.useEffect(() =>{
    const fetchcardInfo = async ()=>{
      await NodeCG.waitForReplicants(cardInfoRep).then(async () => {
        await setCardInfo(cardInfoRep.value)
      });
    };
    fetchcardInfo();
    }, []);
    const cardName = cardInfo[code] ? cardInfo[code].name : undefined;
    const cardCost = cardInfo[code] ? cardInfo[code].cost : undefined;
    const animationOrder = {"--order": cardNumber, "--column": cardColumn}
    
    return (
        <div className="card-container"> 
            <div className="card" style={animationOrder}>
                <img className="card-image" src={imageLink}/>
                <div className="count-container">
                    <p className="count">{count}</p>
                </div>
                <p className="card-name">{cardName}</p>
                <div className="cost-container">
                    <img className="mana-circle" src={manaImage}/>
                    <p className="cost">{cardCost}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;