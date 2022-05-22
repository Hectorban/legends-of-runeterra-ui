import React, {FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";

import Pie from './components/PieChart';
import Chart from './components/Chart';
import TournamentInfo from './components/Tournament_info/TournamentInfo';

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
    <div>
      <TournamentInfo/>
      <Chart/>
      <Pie/>
    </div> 
  );
};

export default app;
