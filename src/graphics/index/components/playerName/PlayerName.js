import React from 'react';

import "./PlayerName.scss"

const PlayerName = () => {
    const reg1 = "https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-bilgewater.png"
    const reg2 = "https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-demacia.png"
    return (
        <div className="player-info-container">
            <p className="player-name">Alysanne</p>
            <img className="region-1" src={reg1}/>
            <img className="region-2" src={reg2}/>
        </div>
    );
};

export default PlayerName;