import React, {FC, useEffect, useState} from 'react'
import { DeckEncoder } from 'runeterra'
import NCGStore, { replicate } from "../../stores/NodecgStore"

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
  console.log(DeckEncoder.decode(deckCodeRep.deckCode))

  return (
    <div>
      <h1>Hello, this is one of your graphics</h1>    
    </div>
  );
};

export default app;