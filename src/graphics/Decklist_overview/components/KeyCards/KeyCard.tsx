import React, { FC } from 'react'
import { Faction } from '~types/cardTypes'

interface Props {
	code: string
	set: number
	faction: Faction
	order: number
}

const KeyCard:FC<Props> = ({code, set, faction, order}: Props) => {
	const keyCardImage = `https://dd.b.pvp.net/latest/set${set}/es_mx/img/cards/${code}.png`
	return (
		<div className='keycard-container'>
			<div className='keycard-faceback'>
				<img className='keycard-faceback-image' src='https://i.imgur.com/BvWaURf.png' alt=''/>
			</div>
			<div className='keycard-facefront'>
				<img className='keycard-facefront-image' src={keyCardImage} alt=''/>
			</div>
		</div>
	)
}

export default KeyCard
