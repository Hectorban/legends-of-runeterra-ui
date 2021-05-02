import React, { useState, useEffect } from "react";
import NCGStore, { replicate } from "../../stores/NodecgStore";
import { DeckEncoder } from "runeterra"
import ReactLoading from 'react-loading'

import DeckList from "./components/deckList"
import DeckCode from "./components/deckCode"
import PlayerName from "./components/playerName"
import KeyCards from "./components/keyCards"
import ManaCurve from './components/manaCurve'

import "./app.scss"
import backVideo from './videos/Comp2.mp4'

function App() {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("Player1DeckCode");
    replicate("animationControl")
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      }); 
    });
  }, []);

  const {
    replicants: { Player1DeckCode, animationControl},
  } = state || {};
  
  const deck = Player1DeckCode ? DeckEncoder.decode(Player1DeckCode) : undefined

  if(Player1DeckCode && animationControl){
  return (
    <div id="app">
      <div className="app-container">
        <div className="player-name">
          <PlayerName 
            deck={deck}
          />
        </div>
        <div className="deck-list">
          <DeckList
            deck = {deck}
          />
        </div>
        <div className="key-cards">
          <KeyCards 
            deck = {deck}
          />
        </div>
        <div className="mana-curve">
          <ManaCurve 
            deck={deck} 
          />
        </div>
        <div className="deck-code">
          <DeckCode
          deckCode = {Player1DeckCode}
          />
        </div>
      </div> 
    </div>
  );}
  else {return(
    <div id="app">
      <div className="app-container">
        <div className="player-name">
        </div>
        <div className="deck-list">
        </div>
        <div className="key-cards">
        </div>
        <div className="mana-curve">
        </div>
        <div className="deck-code">
        </div>
      </div> 
    </div>
  )}
}

export default App;
