import React, {FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";

import DeckInput from './components/DeckInput';

import './app.scss'

const app:FC = () => {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("Replicant"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);

  const {
    replicants: { Replicant }, // Used to take out a replicant from the replicants object
  } = state || {};

  return (
    <div id='app'>
      <div className='app-container'>
        <DeckInput/>
      </div>
    </div>
  );
};

export default app;
