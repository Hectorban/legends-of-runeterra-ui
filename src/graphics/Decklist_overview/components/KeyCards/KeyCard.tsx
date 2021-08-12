import React, { FC } from 'react'

interface Props {
	code: string
	set: number
	order: number
}

const KeyCard:FC<Props> = ({code, set, order}: Props) => {
	const keyCardImage = `https://dd.b.pvp.net/latest/set${set}/es_mx/img/cards/${code}.png`
	return (
		<div className='keycard-container' >
			<div className='keycard-face back' style={{animationDelay:`${5500+order*2000}ms`}}>
				<img className='keycard-image' src='https://i.imgur.com/QjyPsD0.png' alt=''/>
			</div>
			<div className='keycard-face front' style={{animationDelay:`${5500+order*2000}ms`}}>
				<img className='keycard-image' src={keyCardImage} alt=''/>
			</div>
		</div>
	)
}

export default KeyCard
