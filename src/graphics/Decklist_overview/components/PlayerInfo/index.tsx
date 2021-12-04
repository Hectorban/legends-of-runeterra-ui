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
      <video id='playerinfo-logo' autoPlay muted loop> 
        <source id='playerinfo-video'  src='https://www.dropbox.com/s/8w8hmxywfyug1yt/Logo_Diciembre.webm?raw=1' type='video/webm'/>
      </video> 
		</div>
	)
}

export default PlayerInfo