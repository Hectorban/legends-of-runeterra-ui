import React, { FC, useEffect, useState } from 'react'
import { CardType, DDCardDatatype } from '~types/cardTypes'
import KeyCard from './KeyCard'

interface Props {
	deck: CardType[]
}
const cardDataRep = nodecg.Replicant<DDCardDatatype[]>('ddCardData')
const KeyCards:FC<Props> = ({deck}:Props) => {
	const [ddCardInfo, setddCardInfo] = useState<DDCardDatatype[]>()
	useEffect(() => {
		const fetchddCardInfo = () =>{
			NodeCG.waitForReplicants(cardDataRep)
			setddCardInfo(cardDataRep.value)
		}
		fetchddCardInfo()
	}, [])
	if(!ddCardInfo) {
		return (
			<div>
				loading...
			</div>
		)
	}

	const keyCardArray: CardType[] = []
	deck.map((card) =>{
		const {code} = card
		if(ddCardInfo[code].supertype === 'Campeón') {
			keyCardArray.push(card)
		}
	})
	return (
		<div id='keycards-container'>
			{keyCardArray.map((keyCard, i) => {
				const {set, code, faction} = keyCard
				return (
					<KeyCard 
						key={i}
						order={i}
						set={set}
						code={code}
						faction={faction}
					/>
				)
			})}
		</div>
	)
}

export default KeyCards
