import React, {FC, useEffect, useState} from 'react'
import { DeckEncoder } from 'runeterra'
import NCGStore, { replicate } from "../../stores/NodecgStore"

import PlayerInfo from './components/PlayerInfo'
import DeckList from './components/DeckList'
import KeyCards from './components/KeyCards'
import DeckCode from './components/DeckCode'

import './app.scss'

const app:FC = () => {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("deckCodeRep"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);

  const {
    replicants: { deckCodeRep }, // Used to take out a replicant from the replicants object
  } = state || {};

  if (!deckCodeRep) {
    return (
      <div>Loading</div>
    )
  }
  const deck = DeckEncoder.decode(deckCodeRep.deckCode)

  return (
    <div id='app'>
      <img className='app-background' src='https://i.imgur.com/KDFgZkf.png' alt='Background'/>  
      <div className='app-container'>
        <div id='playerinfo'>
          <PlayerInfo 
            deck={deck}
          />
        </div>
        <div id='decklist'>
          <img id='decklist-background' src='https://i.imgur.com/r1zkkQx.png' alt='decklist background'/>
          <DeckList 
            deck={deck}
          />
        </div>
        <div id='keycards'>
          <img id='keycards-background' src='https://i.imgur.com/hW1TO9G.png' alt='keycards-background'/>
          <KeyCards 
            deck={deck}
          />
        </div>
        <div id='deckcode'>
          <img id='deckcode-background' src='https://i.imgur.com/DzvlsSv.png' alt='deckcode-background'/>
          <DeckCode 
            deckCode={deckCodeRep.deckCode}
          />
        </div>
      </div>
    </div>
  );
};

export default app;