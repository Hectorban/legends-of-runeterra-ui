import React, {FC, useEffect, useState} from 'react'
import { DeckEncoder } from 'runeterra'
import NCGStore, { replicate } from "../../stores/NodecgStore"
import { DDragonprovider } from './util/ddragonCtx'

import { DDCardDatatype } from '~types/cardTypes'
import PlayerInfo from './components/PlayerInfo'
import DeckList from './components/DeckList'
import KeyCards from './components/KeyCards'
import DeckCode from './components/DeckCode'
import ManaCurve from './components/ManaCurve'
import './app.scss'

interface deckCodeRepTypes {
  deckCode: string
  name: string
}
interface RepObjectTypes {
  deckCodeRep: deckCodeRepTypes
}
interface ReplicantsTypes {
  replicants: RepObjectTypes  
}

const cardDataRep = nodecg.Replicant<DDCardDatatype[]>('ddCardData')
const app:FC = () => {
  const [state, setState] = useState<ReplicantsTypes>({
    replicants: NCGStore.getReplicants(),
  });
	const [ddCardInfo, setddCardInfo] = useState<DDCardDatatype[]>()

  useEffect(() => {
    replicate("deckCodeRep"); // You can subscribe to replicants with this method
  }, [])

  useEffect(() => {
		const fetchddCardInfo = async () =>{
			await NodeCG.waitForReplicants(cardDataRep)
			setddCardInfo(cardDataRep.value)
		}
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      })
    })
    fetchddCardInfo()
  }, [])

  const {
    replicants: { deckCodeRep }, // Used to take out a replicant from the replicants object
  } = state || {};
  
  if (!deckCodeRep || !ddCardInfo) {
    return (
      <div>Loading</div>
    )
  }

  const {name, deckCode} = deckCodeRep
  const deck = DeckEncoder.decode(deckCode)

  return (
    <div id='app'>
      <video className='app-background' autoPlay muted loop> 
        <source src='https://www.dropbox.com/s/ylkbv46iz3o4sqi/Background.webm?raw=1' type='video/webm'/>
      </video> 
      <div className='app-container'>
        <DDragonprovider value={ddCardInfo}>
        <div id='playerinfo'>
          <PlayerInfo 
            deck={deck}
            name={name}
          />
        </div>
        <div id='decklist'>
          <img id='decklist-background' src='https://i.imgur.com/r1zkkQx.png' alt='decklist background'/>
          <div id='decklist-label'>Cartas</div>
          <DeckList 
            deck={deck}
          />
        </div>
        <div id='keycards'>
          <img id='keycards-background' src='https://i.imgur.com/hW1TO9G.png' alt='keycards background'/>
          <div id='keycards-label'>Cartas clave</div>
          <KeyCards 
            deck={deck}
          />
        </div>
        <div id='manacurve'>
          <img id='manacurve-background' src='https://i.imgur.com/lRjTMTI.png' alt='manacurve background'/>
          <div id='manacurve-label'>Curva de maná</div>
          <ManaCurve 
            deck={deck}  
          />
        </div>
        <div id='deckcode'>
          <img id='deckcode-background' src='https://i.imgur.com/DzvlsSv.png' alt='deckcode-background'/>
          <div id='deckcode-label'>Código de el mazo</div>
          <DeckCode 
            deckCode={deckCode}
          />
        </div>
        </DDragonprovider>
      </div>
    </div>
  );
};

export default app;