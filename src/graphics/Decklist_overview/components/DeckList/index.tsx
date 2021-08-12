import React, { FC } from 'react'
import { CardType } from '~types/cardTypes'
import Card from './Card'

interface Props {
    deck: CardType[]
}

const Decklist:FC<Props> = ({deck}:Props) => (
    <div id='decklist-container'>
        <div className='decklist -firstcolumn'>
            <div className='decklist-column-text'>Unidades</div>
        </div>
        <div className='decklist -secondcolumn'>
            <div className='decklist-column-text'>Hechizos</div>
        </div>
        <div className='decklist -thirdcolumn'>
            <div className='decklist-column-text'>Hitos</div>
        </div>
        {deck.map((card, i) => {
            const { code, count } = card
             return (
                <Card 
                    key={i}
                    cardNumber={i}
                    code={code}
                    count={count}
                />
            )
        })}
    </div>
)

export default Decklist
