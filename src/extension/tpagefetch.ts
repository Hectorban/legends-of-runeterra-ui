import fetch, { Headers } from "node-fetch"
import 'dotenv/config'
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

const requestPlayerData = async(playeruuid) => {
  const username = process.env.TOURNAMENT_USERNAME;
  const password = process.env.TOURNAMENT_PASSWORD;
  const url = process.env.TOURNAMENT_URL
  const request = await fetch(`${url}/${playeruuid}.json`,{
    headers: new Headers({
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
    })
  })
  const resolve = await request.json()
  return resolve
}

main()
