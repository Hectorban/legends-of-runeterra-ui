import React from 'react';

import "./PlayerName.scss"

const PlayerName = ({deck}) => {
    const factionNames = {"BW": 0,"DE": 0,"FR": 0,"IO": 0,"NX": 0,"PZ": 0,"SI": 0,"SH": 0,"MT": 0,"BW": 0}
    const linknames = {"BW": "bilgewater","DE": "demacia","FR": "freljord","IO": "ionia","NX": "noxus","PZ": "piltoverzaun","SI": "shadowisles","SH": "shurima","MT": "targon"}
    deck.map((card) =>{
        factionNames[card.faction.shortCode] += 1
    })
    const sortable = Object.entries(factionNames).sort((a,b) => b[1]-a[1])
    const factionArray = Object.keys(sortable)

    const reg1 = `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${linknames[sortable[0][0]]}.png`
    const reg2 = `https://dd.b.pvp.net/latest/core/es_mx/img/regions/icon-${linknames[sortable[1][0]]}.png`
    return (
        <div className="player-info-container">
            <p className="player-name">Erigby</p>
            <img className="region-1" src={reg1}/>
            <img className="region-2" src={reg2}/>
            <img className='logo' src="https://i.imgur.com/9wNLayY.png"/>
        </div>
    );
};

export default PlayerName;