import fetch from "node-fetch"
import * as nodecgApiContext from './utils/nodecg-api-context'
import { GlobalDatatypes } from "~types/ddragon_globalTypes"
import { DDcardTypes } from '~types/ddragon_cardTypes'

const nodecg = nodecgApiContext.get()
const cardDataRep = nodecg.Replicant('ddCardData')

const main = async () => {
	const globalsReq = await fetch('https://dd.b.pvp.net/latest/core/es_mx/data/globals-es_mx.json')
	const globalsData:GlobalDatatypes = await globalsReq.json()
	const cardData = {}
	await Promise.all(
		globalsData.sets.map(async (set, i) => {
			nodecg.log.info(`Fetching ${set.name} data...`)
			try {
			const setRequest = await fetch(`http://dd.b.pvp.net/latest/set${i+1}/es_mx/data/set${i+1}-es_mx.json`)
			const setData:[DDcardTypes] = await setRequest.json()
			setData.map((card) => {
				cardData[card.cardCode] = {
					"name": card.name,
					"cost": card.cost,
					"type": card.type,
					"supertype": card.supertype
				}
			})
			}
			catch {
				nodecg.log.error(`${set.name} doesn't exist in the data base`)
			}
		})
	)
	cardDataRep.value = cardData
	nodecg.listenFor("ddcardData", (value, ack) => {
		if(ack && !ack.handled) {
			ack(null, cardData[value])
		}
	})
}

main()