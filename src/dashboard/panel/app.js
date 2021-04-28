import React, { useState, useEffect } from "react";
import NCGStore, { replicate } from "../../stores/NodecgStore";

const deckCodeReplicant = nodecg.Replicant("Player1DeckCode")
function App() {
  let deckCodeString = React.createRef() 

  const deckUpdate = () =>{
    deckCodeReplicant.value = deckCodeString.current.value
  }

  return (
    <div id="app">
        <input placeholder="Codigo de deck de el jugador" ref={deckCodeString} className="deck-code" type="text"/>
        <button onClick={deckUpdate} className="set-deck-code">Set deck code</button>
    </div>
  );
}

export default App;
