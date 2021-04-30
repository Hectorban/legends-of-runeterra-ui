import React, { useState, useEffect } from "react";
import NCGStore, { replicate } from "../../stores/NodecgStore";
import { DeckEncoder } from "runeterra"

import DeckList from "./components/deckList"
import DeckCode from "./components/deckCode"
import PlayerName from "./components/playerName"
import KeyCards from "./components/keyCards"
import ManaCurve from './components/manaCurve'

import "./app.scss"

function App() {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("Player1DeckCode");
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      }); 
    });
  }, []);

  const {
    replicants: { Player1DeckCode },
  } = state || {};
  
  console.log(Player1DeckCode)
  const deck = Player1DeckCode ? DeckEncoder.decode(Player1DeckCode) : undefined
  if(Player1DeckCode){
  return (
    <div id="app">
      <div className="app-container">
        <div className="player-name">
          <PlayerName 
          
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
    <h1>Loading...</h1>
  )}
}

export default App;
