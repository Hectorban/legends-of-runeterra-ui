import React, {FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore"
import './app.scss'

import { DDCardDatatype } from '~types/cardTypes'
import { DDragonprovider } from './util/ddragonCtx'

import PlayerInfo from './components/Playerinfo'
import MiniDecksOverview from './components/miniDecksOverview'

const cardDataRep = nodecg.Replicant<DDCardDatatype[]>('ddCardData')

const app:FC = () => {
  const [Repstate, setRepState] = useState({replicants: NCGStore.getReplicants()});
  const [ddCardInfo, setddCardInfo] = useState<DDCardDatatype[]>()

  useEffect(() => {
    replicate("playerData"); // You can subscribe to replicants with this method
  }, [])

  useEffect(() => {
    const fetchddCardInfo = async () => {
      await NodeCG.waitForReplicants(cardDataRep)
      setddCardInfo(cardDataRep.value)
    }
    NCGStore.on("change", () => {
      setRepState({
        replicants: NCGStore.getReplicants(),
      })
    })
    fetchddCardInfo()
  }, [])

  const {replicants: {playerData}} = Repstate

  if (!ddCardInfo || !playerData) return null

  console.log(playerData)

  return (
    <div id='app'>
      <video className='app -background' autoPlay muted loop> 
        <source src='https://www.dropbox.com/s/gmit18m18ngx6bq/Background.webm?raw=1' type='video/webm'/>
      </video> 
      <div className='app -container'>
        <DDragonprovider value={ddCardInfo}>
          <MiniDecksOverview
            playersData={playerData}
          />
          <PlayerInfo
            player1Name={playerData[0].game_name}
            player2Name={playerData[1].game_name}
          />
        </DDragonprovider>
      </div>
    </div>
  );
};

export default app;

