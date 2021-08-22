import React, { FC, useContext} from 'react'
import ddragonctx from '../../util/ddragonCtx'
import { CardType, DDCardDatatype } from '~types/cardTypes'
import KeyCard from './KeyCard'

interface Props {
	deck: CardType[]
}
const KeyCards:FC<Props> = ({deck}:Props) => {
	const ddCardInfo:DDCardDatatype[] = useContext(ddragonctx)
	let keyCardArray: CardType[] = deck.filter(card => ddCardInfo[card.code].supertype === 'Campeón')

	if(!keyCardArray.length) {
		keyCardArray = deck.filter(card => ddCardInfo[card.code].cost >= 8) 
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

