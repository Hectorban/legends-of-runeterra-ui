import React, { FC, useContext } from 'react'
import { CardType, DDCardDatatype } from '~types/cardTypes'
import ddragonctx from '../../util/ddragonCtx'

interface props {
  deck: CardType[]
}

const Minideck:FC<props> = ({deck}:props) => {
	const ddCardInfo:DDCardDatatype[] = useContext(ddragonctx)
	let championsArray: CardType[] = deck.filter(card => ddCardInfo[card.code].supertype === 'Campeón')
	if(!championsArray.length) {
		championsArray = deck.filter(card => ddCardInfo[card.code].cost >= 8) 
	}

  const ddImageNames = {      // These are the names where you can find the images of the faction icons in data dragon:
      "BW": "bilgewater",     // `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${name}.png`
      "DE": "demacia",
      "FR": "freljord",
      "IO": "ionia",
      "NX": "noxus",
      "PZ": "piltoverzaun",
      "SI": "shadowisles",
      "SH": "shurima",
      "MT": "targon",
      "BC": "bandlecity"
  }

  const FactionWeight = {     // Initializes an object with all the factions at 0 to calculate their weight
      "BW": 0,                // Pretty sure there's a better way to do this though
      "DE": 0,
      "FR": 0,
      "IO": 0,
      "NX": 0,
      "PZ": 0,
      "SI": 0,
      "SH": 0,
      "MT": 0,
      "BC": 0
  }
  deck.forEach((card) => {
      FactionWeight[card.faction.shortCode] += card.count
  })
  const topWeight = Object.entries(FactionWeight).sort((a,b) => b[1]-a[1])
  const region1 = `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${ddImageNames[topWeight[0][0]]}.png` 
  const region2 = `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${ddImageNames[topWeight[1][0]]}.png`

  return (
    <div className='minideck'>
      <div className='minideck-background'>
        <img className='background' src="https://i.imgur.com/LxgntQ9.png" alt="" />
      </div>
      <div className='minideck-region1'>
        <img className='image' src="https://i.imgur.com/i1cUbqA.png" alt="" />
        <img className='region' src={region1} alt="" />
      </div>
      <div className='minideck-region2'>
        <img className='image' src="https://i.imgur.com/i1cUbqA.png" alt="" />
        <img className='region' src={region2} alt="" />
      </div>
      <div className='minideck-champions'>
        {championsArray.map((keyCard) => {
          const {set, code} = keyCard
          const championImage = `https://dd.b.pvp.net/latest/set${set}/es_mx/img/cards/${code}.png`
          return (
            <div className='championImage-container'>
              <img className='image' src={championImage} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Minideck
