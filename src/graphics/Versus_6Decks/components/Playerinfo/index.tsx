import React, { FC } from 'react'

interface playerInfoTypes {
  player1Name: string,
  player2Name: string
}

const index:FC<playerInfoTypes> = ({player1Name, player2Name} : playerInfoTypes) => {
  console.log(player1Name)
  
  return (
    <div className="playerInfo">
      <div className='playerInfo-background'>
        <img src="https://i.imgur.com/5lEHhaE.png" alt="" />
      </div>
      <div className='playerInfo-cont'>
        <div className='playerInfo-logo'>
          <img className='logo' src="https://i.imgur.com/Z5IqBM9.png" alt="" />
        </div>
        <div className='playerInfo-VStext'>
          <img className='vsText' src="https://i.imgur.com/ZIw6m93.png" alt="" />
        </div>
        <div className='playerInfo-player-1'>
          <p className='playerName'>{player1Name}</p>
          <img className='playerImage'  src="https://i.imgur.com/TgYTEMk.png" alt="" />
        </div>
        <div className="playerInfo-player-2">
          <p className='playerName'>{player2Name}</p>
          <img className='playerImage' src="https://i.imgur.com/KcBrpI9.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default index
