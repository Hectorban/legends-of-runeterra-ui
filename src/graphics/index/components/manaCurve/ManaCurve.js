import React from 'react';

import ManaPylon from '../manaPylon'
import './ManaCurve.scss'

const cardInfoRep = nodecg.Replicant("allCardData")

const ManaCurve = ({deck}) => {
    const [cardInfo, setCardInfo] = React.useState("");
 
    React.useEffect(() =>{
    const fetchcardInfo = async ()=>{
      await NodeCG.waitForReplicants(cardInfoRep).then(async () => {
        await setCardInfo(cardInfoRep.value)
      });
    };
    fetchcardInfo();
    }, []);
    const costObj = {"0": 0,"1": 0,"2": 0,"3": 0,"4": 0,"5": 0,"6": 0,"7": 0,"8": 0,"9": 0,"10": 0}
    deck.map((card) =>{
        const cardCost = cardInfo[card.code] ? cardInfo[card.code].cost: undefined
        costObj[cardCost] += card.count
    })

    return (
        <div className='mana-curve-container'>
            <img className='background' src='https://i.imgur.com/CBIJyse.png'/>
            <div className='curve-container'>
                {Object.keys(costObj).map((cost, i) =>{
                    const costValue = costObj[cost]
                    return (
                        <ManaPylon 
                        costValue = {costValue}
                        costKey = {cost}
                        key = {i}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default ManaCurve;