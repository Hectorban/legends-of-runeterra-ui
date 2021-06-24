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
    const cardStyle = {
        gridColumn: cardColumn,
        animationDelay: `${cardNumber*150}ms`,
    }
    console.log(faction)
	return (
		<div id='card-container' style={cardStyle}>
			<img id='card-image' src={cardImage} alt=''/>
            <p id='card-count'>{count}</p>
            <p id='card-name'>{name}</p>
            <div id='card-cost-container'>
                <img id='card-cost-manacircle' src='https://i.imgur.com/wqqvnzt.png' alt=''/>
                <p id='card-cost-number'>{cost}</p>
            </div>
		</div>
	)
}

export default Card
