import React, {FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";
import './app.scss'

const mockData = [
  {
    seed: 2,
    game_name: "Jacowaco",
    decks:[
      {
         "factions":"IO,SH",
         "champions":"Irelia,Azir",
         "code":"CMCACAYCAUBACAQGFIBQIAQEAUEQIBAHAMNDGXIDAEBAECQBAMBBIAQEAIFQ6AQBAEBBMAIEA54Q",
      },
      {
         "factions":"FR,NX",
         "champions":"LeBlanc,Ashe",
         "code":"CECACAYBAIAQIAYEAMAQGBA7EEDACAIEBMPCMKJQAIAQCAIBAECAGAQCAEAQGNICAEAREKQ",
      },
      {
         "factions":"FR,SH",
         "champions":"Renekton,Sejuani,Sivir",
         "code":"CMCACAQBAYAQGAICAMAQCBIWD4CQIBZGFU3UGZYDAEBACAQBAQAQUAQEA4GV2AQBAEARUAIEA4KA",
      }
   ],
   
  },
  {

  }
]


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
  console.log(Replicant)

  return (
    <div id='app'>
      <div className='app -background'>
        <img className='background' src='https://i.imgur.com/VZeOw67.jpg' alt=''/>
      </div>
      <div className='app -container'>
        <div className='versus'>
          Versus
        </div>
        <div className='playerInfo'>
          Playerinfo
        </div>
      </div>
    </div>
  );
};

export default app;

