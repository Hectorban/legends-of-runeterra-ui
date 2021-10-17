import React, { FC } from 'react'
import { DeckEncoder } from 'runeterra'
import { PlayerDataTypes } from '~types/playerData'

import Minideck from './Minideck'

interface props {
  playersData: PlayerDataTypes[]
}

const index:FC<props> = ({playersData}: props) => {
  console.log(playersData)
  return (
    <div className='versus'>
      <div className='middle'>
        <div className='left'/>
        <img className='image' src="https://i.imgur.com/BxNGSnp.png" alt="" />
        <div className='right'/>
      </div>
      <div className='player1'>
        {playersData[0].decks.map((deck, index) => {
          const deckodedDeck = DeckEncoder.decode(deck.code)
          return (
            <Minideck
              key={index}
              deck={deckodedDeck}
            />
          )
        })}
      </div>
      <div className='player2'>
        {playersData[1].decks.map((deck, index) => {
          const deckodedDeck = DeckEncoder.decode(deck.code)
          return (
            <Minideck
              key={index}
              deck={deckodedDeck}
            />
          )
        })}
      </div>
    </div>
  )
}

export default index
