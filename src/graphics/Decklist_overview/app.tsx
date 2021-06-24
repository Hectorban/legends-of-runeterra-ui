import React, {FC, useEffect, useState} from 'react'
import { DeckEncoder } from 'runeterra'
import NCGStore, { replicate } from "../../stores/NodecgStore"

import PlayerInfo from './components/PlayerInfo'
import DeckList from './components/DeckList'

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
          <DeckList 
            deck={deck}
          />
        </div>
      </div>
    </div>
  );
};

export default app;