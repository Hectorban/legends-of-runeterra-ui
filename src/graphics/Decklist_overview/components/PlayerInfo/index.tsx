import React, { FC } from 'react'
import { CardType } from '~types/cardTypes'

interface Props {
  deck: CardType[]
  name: string
}

const PlayerInfo:FC<Props> = ({deck, name}:Props) => {
    const ddImageNames = {      // These are the names where you can find the images of the faction icons in data dragon:
      "BW": "bilgewater",     // `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${name}.png`
      "DE": "demacia",
      "FR": "freljord",
      "IO": "ionia",
      "NX": "noxus",
      "PZ": "piltoverzaun",
      "SI": "shadowisles",
      "SH": "shurima",
      "MT": "targon"
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
      "MT": 0
    }

    deck.forEach((card) => { FactionWeight[card.faction.shortCode] += card.count })

    const topWeight = Object.entries(FactionWeight).sort((a,b) => b[1] - a[1])
    const region1 = `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${ddImageNames[topWeight[0][0]]}.png` 
    const region2 = `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${ddImageNames[topWeight[1][0]]}.png`

	return (
		<div id='playerinfo-container'>
			<p id='playerinfo-name'>{name}</p>
      <img className='playerinfo-regions' src={region1} alt={ddImageNames[topWeight[0][0]]}/> 
      <img className='playerinfo-regions' src={region2} alt={ddImageNames[topWeight[1][0]]}/>
      <img id='playerinfo-logo' src='https://www.dropbox.com/s/zhb35qy4kuuzhiw/LOR_ST2022_CJ-TournamentMonoLogo_2700x2700_PCruz_v001_LA.png?raw=1'/>
		</div>
	)
}

export default PlayerInfo