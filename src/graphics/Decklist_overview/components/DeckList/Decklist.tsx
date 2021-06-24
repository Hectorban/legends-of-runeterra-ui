import React, { FC } from 'react'
import Card from './Card'
import { CardType } from '~types/cardTypes'

interface Props {
    deck: CardType[]
}

const Decklist:FC<Props> = ({deck}:Props) => (
    <div id='decklist-container'>
        {deck.map((card, i) => {
            const {code, count, faction} = card
            return (
                <Card 
                    key={i}
                    cardNumber={i}
                    code={code}
                    count={count}
                    faction={faction}
                />
            )
        })}
    </div>
)

export default Decklist
