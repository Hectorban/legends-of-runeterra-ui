import React, {FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";

import DeckInput from './components/DeckInput';

import './app.scss'
import PlayerSelect from './components/PlayerSelect';
import AllDecksSelector from './components/AllDecksSelector';

const playerInfoRep = nodecg.Replicant('allPlayerDecksData')
const app:FC = () => {
	const [playerInfo, setPlayerInfo] = useState()
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("Replicant"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
		const fetchPlayerInfo = async () =>{
			await NodeCG.waitForReplicants(playerInfoRep)
			setPlayerInfo(playerInfoRep.value)
		}
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
    fetchPlayerInfo()
  }, []);

  const {
    replicants: { Replicant }, // Used to take out a replicant from the replicants object
  } = state || {};

  if (!playerInfo) return null 

  return (
    <div id='app'>
      <div className='app-container'>
        <DeckInput/>
        <PlayerSelect 
          allPlayerData={playerInfo}
        />
        <AllDecksSelector
          allPlayerDecksData={playerInfo}
        />
      </div>
    </div>
  );
};

export default app;
