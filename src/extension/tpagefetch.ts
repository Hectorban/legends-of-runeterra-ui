
import fetch, { Headers } from "node-fetch"
import 'dotenv/config'
import * as nodecgApiContext from './utils/nodecg-api-context'

const nodecg = nodecgApiContext.get()
const playerDataRep = nodecg.Replicant('playerData')

const main = async () => {
  const player1 = await requestPlayerData("78e4acff-944b-5eed-92b1-18503b02f4a1")
  const player2 = await requestPlayerData("38e4789e-64cb-5f6f-bdf4-4be1b85a45ba")
  const concPlayerData = [player1, player2]
  nodecg.log.info(concPlayerData)
	playerDataRep.value = concPlayerData
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
