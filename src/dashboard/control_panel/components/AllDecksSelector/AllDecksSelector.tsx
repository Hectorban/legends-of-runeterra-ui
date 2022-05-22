import React, {useState} from 'react'

const deckCodeRep = nodecg.Replicant("deckCodeRep")

function AllDecksSelector({allPlayerDecksData}) {
	const [selectedPlayer, setSelectedPlayer] = useState(0)
  const handleChange = (e) => {
    setSelectedPlayer(e.target.value)
  }

  const updateDecklistOverview = (deckcode) => {
    console.log(deckcode)
    deckCodeRep.value = {
      name: allPlayerDecksData[selectedPlayer].game_name,
      deckCode: deckcode
    }
  }

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        {allPlayerDecksData.map((player, iteration) => {
          const {game_name} = player
          return (
            <option value={iteration}> {game_name} </option>
          )
        })}
      </select>
      {allPlayerDecksData[selectedPlayer].decks.map(deck => {
        return (
          <button type='button' onClick={(e) => updateDecklistOverview(deck.code)}>{deck.champions}</button>
        )
      })}
    </div>
  )
}

export default AllDecksSelector