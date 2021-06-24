import React, { FC } from 'react'
import { CardType } from '~types/cardTypes'
import Card from './Card'

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
