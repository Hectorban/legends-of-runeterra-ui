import fetch, { Headers } from "node-fetch"
import * as nodecgApiContext from './utils/nodecg-api-context'
import * as allPlayerData from './utils/player_data.json'

const nodecg = nodecgApiContext.get()
const playerDataRep = nodecg.Replicant('playerData')
const allPlayerDecksDataRep = nodecg.Replicant('allPlayerDecksData')

async function main() {
  await exposeDecksByPlayer()
  await initPlayerSelectorListener()
}

async function initPlayerSelectorListener() {
  nodecg.log.info("Initializing player selector listener...")

  nodecg.listenFor('playerSelection', async (players, ack) => {
      if (ack && !ack.handled) {
        const player1 = await requestPlayerData(players.player1)
        const player2 = await requestPlayerData(players.player2)
        const concPlayerData = [player1, player2]
        nodecg.log.info(concPlayerData)
        playerDataRep.value = concPlayerData
        ack(null, concPlayerData)
      }
  })
}

async function exposeDecksByPlayer() {
  const decks = []
  await Promise.all(
    allPlayerData.default.map(async (player) => {
      console.log(`Fetching ${player.game_name} data...`)
      const playerData = await requestPlayerData(player.puuid)
      decks.push({
        ...player,
        decks: playerData.decks
      })
    })
  ) 
  allPlayerDecksDataRep.value = decks
}

async function requestPlayerData (playeruuid) {
  const username = 'lor';
  const password = 'Top Deck Poro 99';
  const url = 'http://lor-tournament-data-lb-1351839414.us-west-2.elb.amazonaws.com/data/55e88333-ce68-4a5c-95c1-361cd4e56f5f'
  const request = await fetch(`${url}/${playeruuid}.json`, {
    headers: new Headers({
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
    })
  })
  const resolve = await request.json()
  return resolve
}

main()