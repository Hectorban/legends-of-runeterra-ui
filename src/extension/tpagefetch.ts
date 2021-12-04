
import fetch, { Headers } from "node-fetch"
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
  const username = 'lor';
  const password = 'Top Deck Poro 99';
  const request = await fetch(`http://lor-tournament-data-lb-1351839414.us-west-2.elb.amazonaws.com/data/5a674db7-b4bc-4519-881d-fc5fe1b6e4d2/${playeruuid}.json`,{
    headers: new Headers({
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
    })
  })
  const resolve = await request.json()
  return resolve
}

main()