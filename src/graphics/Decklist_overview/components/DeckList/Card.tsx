import React, { FC, useState, useEffect } from 'react'
import { Faction, DDCardDatatype } from '~types/cardTypes'

interface Props {
    cardNumber: number
    code: string
    count: number
    faction: Faction
}

const Card:FC<Props> = ({cardNumber, code, count, faction}:Props) => {
    const [ddCardData, setddCardData] = useState<DDCardDatatype>()
    useEffect(() => {
        const fetccardInfo = async () => {
            const response = await nodecg.sendMessage('ddcardData', code)
            setddCardData(response)
        }
        fetccardInfo()
    }, [])

    if(!ddCardData) {
        return (
            <div>
                ...
            </div>
        )
    }

    const cardImage = `https://cdn-lor.mobalytics.gg/production/images/cards-preview/${code}.webp`
    const {name, cost, type} = ddCardData
    const CardTypeIndex = {
        'Unidad': 1,
        'Hechizo': 2,
        'Habilidad':2,
        'Trampa': 3,
        'Hito': 3
    }
    const cardColumn = CardTypeIndex[type]
    const cardAniStyle = {animationDelay: `${cardNumber*150}ms`}
    const cardColIndex = {gridColumn: cardColumn}
    console.log(faction)
	return (
    <div className='cardAnimation-container' style={cardColIndex}>
		<div className='card-container' style={cardAniStyle}>
			<img className='card -image' src={cardImage} alt=''/>
            <div className='card -count'>
                <p className='card -count-number'>{count}</p>
            </div>
            <div className='card -name'>{name}</div>
            <div className='card -cost-container'>
                <img className='card-cost -manacircle' src='https://i.imgur.com/wqqvnzt.png' alt=''/>
                <div className='card-cost -number'>{cost}</div>
            </div>
		</div>
    </div>
	)
}

export default Card
