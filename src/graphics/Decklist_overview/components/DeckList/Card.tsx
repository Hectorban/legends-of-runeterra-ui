import React, { FC, useContext} from 'react'
import ddragonctx from '../../util/ddragonCtx'
import { DDCardDatatype } from '~types/cardTypes'

interface Props {
    cardNumber: number
    code: string
    count: number
}

const Card:FC<Props> = ({ cardNumber, code, count }:Props) => {
	const ddCardInfo:DDCardDatatype[] = useContext(ddragonctx)
    const {name, cost, type, supertype} = ddCardInfo[code]
    console.log(supertype)
    const CardTypeIndex = {
        'Unidad': 1,
        'Hechizo': 2,
        'Habilidad':2,
        'Trampa': 3,
        'Hito': 3
    }
    
    const cardImage = `https://cdn-lor.mobalytics.gg/production/images/cards-preview/${code}.webp`
    const cardColumn = CardTypeIndex[type]
    const cardAniStyle = {animationDelay: `${cardNumber*150}ms`,
                          border: supertype==='Campeón' ? `4px solid rgba(255, 223, 1, .5)` : '0px'
                        }
    const cardColIndex = {gridColumn: cardColumn}
	return (
    <div className='cardAnimation-container' style={cardColIndex}>
		<div className='card-container' style={cardAniStyle}>
            <div className='card -image'>
                <img className='card -image-image' src={cardImage} alt=''/>
            </div>
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
