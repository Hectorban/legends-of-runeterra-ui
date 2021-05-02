import React, { useState, useEffect } from "react";
import NCGStore, { replicate } from "../../stores/NodecgStore";

const deckCodeReplicant = nodecg.Replicant("Player1DeckCode")
const animationControlReplicant = nodecg.Replicant("animationControl",{ defaultValue: false })
function App() {
  let deckCodeString = React.createRef() 

  const deckUpdate = () =>{
    deckCodeReplicant.value = deckCodeString.current.value
  }
  const animationUpdateON = () =>{
    animationControlReplicant.value = true
  }
  const animationUpdateOFF = () =>{
    animationControlReplicant.value = false
  }
  return (
    <div id="app">
        <input placeholder="Codigo de deck de el jugador" ref={deckCodeString} className="deck-code" type="text"/>
        <button onClick={deckUpdate} className="set-deck-code">Set deck code</button>
        <button onClick={animationUpdateON} className="set-deck-code">Animation ON</button>
        <button onClick={animationUpdateOFF} className="set-deck-code">Animation OFF</button>
    </div>
  );
}

export default App;
