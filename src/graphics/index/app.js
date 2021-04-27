import React, { useState, useEffect } from "react";
import NCGStore, { replicate } from "../../stores/NodecgStore";
import { DeckEncoder } from "runeterra"

import DeckList from "./components/deckList"
import DeckCode from "./components/deckCode"
import PlayerName from "./components/playerName"
import KeyCards from "./components/keyCards"

import "./app.scss"

function App() {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("champSelectUpdate");
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);

  const {
    replicants: { champSelectUpdate },
  } = state || {};
  
  const deck = DeckEncoder.decode("CECAEBAHDIXQGAIFEIYDCAQEAUBRAAICAUCAEBABAUFRSKBUAQCAOAR3KF4QA")

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

        </div>
        <div className="deck-code">
        <DeckCode
        
        />
        </div>
      </div> 
    </div>
  );
}

export default App;
