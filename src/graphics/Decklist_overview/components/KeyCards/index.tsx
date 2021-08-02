import React, { FC, useContext} from 'react'
import ddragonctx from '../../util/ddragonCtx'
import { CardType, DDCardDatatype } from '~types/cardTypes'
import KeyCard from './KeyCard'

interface Props {
	deck: CardType[]
}
const KeyCards:FC<Props> = ({deck}:Props) => {
	const ddCardInfo:DDCardDatatype[] = useContext(ddragonctx)
	const keyCardArray: CardType[] = []
	deck.forEach((card) =>{
		const {code} = card
		if(ddCardInfo[code].supertype === 'Campeón') {
			keyCardArray.push(card)
		}
	})
	if(keyCardArray) {
		deck.forEach((card) => {
			const {code} = card
			if(ddCardInfo[code].cost >= 8) {
				keyCardArray.push(card)
			}
		})
	}
	return (
		<div id='keycards-container'>
			{keyCardArray.map((keyCard, i) => {
				const {set, code} = keyCard
				return (
					<KeyCard 
						key={i}
						order={i}
						set={set}
						code={code}
					/>
				)
			})}
		</div>
	)
}

export default KeyCards

